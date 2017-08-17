import { Component, OnInit, OnDestroy } from '@angular/core';
import { SwitchboardService } from '../switchboard.service'
import { Employee } from '../employee';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'employees-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit, OnDestroy {

  private employee: Employee;
  private subEmployee: Subscription;

  constructor(private switchboard: SwitchboardService) { }

  ngOnInit() {
    this.subEmployee = this.switchboard.employee$.subscribe((e) => {
      this.employee = e;
    });
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subEmployee.unsubscribe();
  }

}
