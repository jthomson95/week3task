import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { NewEmployee } from './new-employee';
import { Employee } from './employee';

@Injectable()
export class DatabaseService {

  constructor(private http: HttpClient) { }

  employees = this.http.get<Employee[]>('/api/employees');

  addNewEmployee(newEmployee: NewEmployee) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let body = JSON.stringify(newEmployee);
    // return this.http.post('/api/food/', body, options).map((res: Response) => res.json());

    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };

    return this.http.post("/api/add-employee", body, options).subscribe();
  }
}
