import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'employees-view-all-employees',
  templateUrl: './view-all-employees.component.html',
  styleUrls: ['./view-all-employees.component.css']
})
export class ViewAllEmployeesComponent implements OnInit {

  constructor(public db: DatabaseService) { }

  ngOnInit() {
  }

}
