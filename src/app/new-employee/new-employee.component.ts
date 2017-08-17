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

  // @ViewChild('firstNameInput') firstNameInput; 
  // @ViewChild('lastNameInput') lastNameInput; 
  // @ViewChild('addressInput') addressInput; 
  // @ViewChild('postcodeInput') postcodeInput; 
  // @ViewChild('townInput') townInput; 
  // @ViewChild('ibanInput') ibanInput; 
  // @ViewChild('ninInput') ninInput; 
  // @ViewChild('salaryInput') salaryInput;

  ngOnInit() {
  }
  
  submitClicked(): void {
    // get the html elements
    // var firstName = this.firstNameInput.nativeElement.value;
    // var lastName = this.lastNameInput.nativeElement.value;
    // var address = this.addressInput.nativeElement.value;
    // var postcode = this.postcodeInput.nativeElement.value;
    // var town = this.townInput.nativeElement.value;
    // var iban = this.ibanInput.nativeElement.value;
    // var nin = this.ninInput.nativeElement.value;
    // var salary = this.salaryInput.nativeElement.value;

    // var newEmployee = new NewEmployee(firstName, lastName, address,postcode)
    // var newEmployee = new NewEmployee(firstName, lastName, address, postcode, town, iban, nin, salary);
    // this.db.addNewEmployee(newEmployee);
    this.db.addNewEmployee(this.newEmp);
  }

}
