import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'employees-view-all-departments',
  templateUrl: './view-all-departments.component.html',
  styleUrls: ['./view-all-departments.component.css']
})
export class ViewAllDepartmentsComponent implements OnInit {

  constructor(private db: DatabaseService) { }

  ngOnInit() {
  }

}
