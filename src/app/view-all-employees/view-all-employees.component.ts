import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { SwitchboardService } from '../switchboard.service';
import { Employee } from '../employee';

@Component({
  selector: 'employees-view-all-employees',
  templateUrl: './view-all-employees.component.html',
  styleUrls: ['./view-all-employees.component.css']
})
export class ViewAllEmployeesComponent implements OnInit {

  constructor(private db: DatabaseService, private switchboard: SwitchboardService) { }

  ngOnInit() {
  }

  employeeClicked(employee: Employee) {
    this.switchboard.switchEmployee(employee);
  }

}
