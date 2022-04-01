import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetails } from '../model/user-details';

import { UserDetailsService } from '../service/user-details.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  status: string = "";
  userDetailsForm!: FormGroup;

  constructor(private fb: FormBuilder, private userserv: UserDetailsService) {

  }

  ngOnInit(): void {
    this.userDetailsForm = this.fb.group({
      'firstname': new FormControl("", Validators.compose([Validators.required, Validators.minLength(6)])),
      'lastname': new FormControl("", Validators.compose([Validators.required, Validators.minLength(6)]))
    });
  }

  onClear() {
    this.status = "";
    this.userDetailsForm?.reset();
  }

  get userDetailsFormControl() {
    return this.userDetailsForm.controls;
  }

  onSubmit() {
    if (this.userDetailsForm.invalid) {
      this.userDetailsForm.markAllAsTouched();
      return;
    }
    var userDetails = new UserDetails(this.userDetailsForm?.get("firstname")?.value, this.userDetailsForm.get("lastname")?.value);
    this.userserv.saveUserDetails(userDetails).subscribe(result => {
      this.userDetailsForm?.reset();
      this.status = "User details submitted successfully.";
    }, error => {

    });

  }
}
