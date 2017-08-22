import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Employee } from './employee';

@Injectable()
export class SwitchboardService {

  constructor() { }

  private employeeWatcher = new Subject<Employee>(); 
  public employee$ = this.employeeWatcher.asObservable(); 
  
  public switchEmployee(employee: Employee) {
     if (employee) { 
        this.employeeWatcher.next(employee); 
     } 
  }

  private employeesInDepartmentWatcher = new Subject<Employee[]>(); 
  public employeesInDepartment$ = this.employeesInDepartmentWatcher.asObservable(); 
  
  public switchEmployeesInDepartment(employees: Employee[]) {
     if (employees) { 
        this.employeesInDepartmentWatcher.next(employees); 
     } 
  }

  private employeeToSalesEmployeeWatcher = new Subject<Employee>(); 
  public employeeToSalesEmployee$ = this.employeeToSalesEmployeeWatcher.asObservable(); 
  
  public switchEmployeeToSalesEmployee(employee: Employee) {
     if (employee) { 
        this.employeeToSalesEmployeeWatcher.next(employee); 
     } 
  }

}
