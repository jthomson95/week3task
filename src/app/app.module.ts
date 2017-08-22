import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { DatabaseService } from './database.service';
import { ViewAllEmployeesComponent } from './view-all-employees/view-all-employees.component';
import { ViewAllDepartmentsComponent } from './view-all-departments/view-all-departments.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component'
import { SwitchboardService } from './switchboard.service';
import { EmployeesInDepartmentComponent } from './employees-in-department/employees-in-department.component';
import { AddSalesEmployeeComponent } from './add-sales-employee/add-sales-employee.component';
import { NewSalesEmployeeComponent } from './new-sales-employee/new-sales-employee.component'

@NgModule({
  declarations: [
    AppComponent,
    NewEmployeeComponent,
    ViewAllEmployeesComponent,
    ViewAllDepartmentsComponent,
    EmployeeDetailsComponent,
    EmployeesInDepartmentComponent,
    AddSalesEmployeeComponent,
    NewSalesEmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatabaseService, SwitchboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
