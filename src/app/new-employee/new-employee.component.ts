import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NewEmployee } from '../new-employee';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'employees-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  constructor(private elRef: ElementRef, private db: DatabaseService) { }

  @ViewChild('firstNameInput') firstNameInput; 
  @ViewChild('lastNameInput') lastNameInput; 
  @ViewChild('addressInput') addressInput; 
  @ViewChild('postcodeInput') postcodeInput; 
  @ViewChild('townInput') townInput; 
  @ViewChild('ibanInput') ibanInput; 
  @ViewChild('ninInput') ninInput; 
  @ViewChild('salaryInput') salaryInput;

  ngOnInit() {
  }
  
  submitClicked(): void {
    // get the html elements
    var firstName = this.firstNameInput.nativeElement.value;
    var lastName = this.firstNameInput.nativeElement.value;
    var address = this.firstNameInput.nativeElement.value;
    var postcode = this.firstNameInput.nativeElement.value;
    var town = this.firstNameInput.nativeElement.value;
    var iban = this.firstNameInput.nativeElement.value;
    var nin = this.firstNameInput.nativeElement.value;
    var salary = this.firstNameInput.nativeElement.value;

    var newEmployee = new NewEmployee(firstName, lastName, address, postcode, town, iban, nin, salary);
    this.db.addNewEmployee(newEmployee);
  }

}
