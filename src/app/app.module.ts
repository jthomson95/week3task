import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    NewEmployeeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
