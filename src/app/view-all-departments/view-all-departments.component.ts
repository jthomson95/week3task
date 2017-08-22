import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Department } from '../department';
import { SwitchboardService } from '../switchboard.service';

@Component({
  selector: 'employees-view-all-departments',
  templateUrl: './view-all-departments.component.html',
  styleUrls: ['./view-all-departments.component.css']
})
export class ViewAllDepartmentsComponent implements OnInit {

  constructor(private db: DatabaseService, private switchboard: SwitchboardService) { }

  ngOnInit() {
  }

  onClick(dep: Department) {
    this.db.getEmployeesInDepartment(dep).subscribe((emps) => {
      this.switchboard.switchEmployeesInDepartment(emps);
    });
  }
}
