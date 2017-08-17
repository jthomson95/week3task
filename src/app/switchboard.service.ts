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

}
