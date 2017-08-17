import { Component, OnInit, OnDestroy } from '@angular/core';
import { Employee } from '../employee';
import { SwitchboardService } from '../switchboard.service';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'employees-employees-in-department',
  templateUrl: './employees-in-department.component.html',
  styleUrls: ['./employees-in-department.component.css']
})
export class EmployeesInDepartmentComponent implements OnInit, OnDestroy {

  private employees: Employee[];
  private subEmployees: Subscription;

  constructor(private switchboard: SwitchboardService) { }

  ngOnInit() {
    this.subEmployees = this.switchboard.employeesInDepartment$.subscribe((emps) => {
      this.employees = emps;
    });
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subEmployees.unsubscribe();
  }

}
