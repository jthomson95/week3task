import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllDepartmentsComponent } from './view-all-departments.component';

describe('ViewAllDepartmentsComponent', () => {
  let component: ViewAllDepartmentsComponent;
  let fixture: ComponentFixture<ViewAllDepartmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllDepartmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
