import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { NewEmployee } from '../new-employee';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'employees-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  @Input() newEmp: NewEmployee;

  constructor(private elRef: ElementRef, private db: DatabaseService) { 
    this.newEmp = new NewEmployee("","","","","","","",0);
  }

  ngOnInit() {
  }
  
  submitClicked(): void {
    this.db.addNewEmployee(this.newEmp).subscribe(res => {
      if(res) {
        alert("Employee added!");
      }
    });
  }

}
