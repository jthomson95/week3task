import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllEmployeesComponent } from './view-all-employees.component';

describe('ViewAllEmployeesComponent', () => {
  let component: ViewAllEmployeesComponent;
  let fixture: ComponentFixture<ViewAllEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
