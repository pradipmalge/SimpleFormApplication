import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsComponent } from './user-details.component';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should required first name and last name', () => {

    component.userDetailsForm.setValue({
      "firstname": "",
      "lastname": ""
    });

    expect(component.userDetailsForm.valid).toEqual(false);
  });

  it('should be atleast size chatacters in first name and last name', () => {
    component.userDetailsForm.setValue({
      "firstname": "proxyfirstname",
      "lastname": "proxylastname"
    });

    expect(component.userDetailsForm.valid).toEqual(true);
  });

});
