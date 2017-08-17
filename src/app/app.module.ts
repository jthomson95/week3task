import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { DatabaseService } from './database.service';
import { ViewAllEmployeesComponent } from './view-all-employees/view-all-employees.component'

@NgModule({
  declarations: [
    AppComponent,
    NewEmployeeComponent,
    ViewAllEmployeesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
