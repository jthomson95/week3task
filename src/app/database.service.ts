import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { NewEmployee } from './new-employee';
import { Employee } from './employee';
import { Department } from './department';

@Injectable()
export class DatabaseService {

  constructor(private http: HttpClient) { }

  departments = this.http.get<Department[]>('/api/departments');
  employees = this.http.get<Employee[]>('/api/employees');

  addNewEmployee(newEmployee: NewEmployee) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let body = JSON.stringify(newEmployee);
    console.log(body);
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };

    return this.http.post("/api/employee", body, options).subscribe();
  }
}
