import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { NewEmployee } from './new-employee';
import { Employee } from './employee';
import { Department } from './department';

@Injectable()
export class DatabaseService {

  constructor(private http: HttpClient) { }

  departments = this.http.get<Department[]>('/api/department');
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

  getEmployeesInDepartment(dep: Department) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let body = JSON.stringify(dep);
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };

    return this.http.post<Employee[]>("/api/employeeDepartment", body, options);

    // var params = new HttpParams();
    // params.set("id", ""+dep.id);

    // let headers = new Headers({ 'Content-Type': 'application/json' });

    // this.http.post<Employee[]>("/api/employeeDepartment","",{params: params});
    // return this.http.post("/api/employeeDepartment",{params: params});
    // return this.http.get<Department[]>("/api/employeeDepartment",{params: params})


    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // const options = {
    //   headers: new HttpHeaders().set('Content-Type', 'application/json'),
    // };

    // return this.http.get("/api/employeeDepartment?id="+dep.id,options);
  }
}
