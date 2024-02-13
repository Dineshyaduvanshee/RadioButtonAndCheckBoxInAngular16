
import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RadioButtonAndCheckBoxInAngular16';
  user = new User();
  error = 'error'; // Define the 'error' class

  constructor() { }

  ngOnInit(): void { }

  // OnFormSubmit(userForm: NgForm) {

  //   // Handle form submission logic here
  //   console.log(this.user);
  //   console.log('User Form '+userForm.form.controls['username'].value);
  //   console.log('User Form '+userForm.form.controls['gender'].value);
  //   console.log('User Form '+userForm.form.controls['isMarried'].value);
  //   console.log('User Form '+userForm.form.controls['isTCAccepted'].value);

  //   if (userForm.form.invalid) {
  //     return;
  //   }

  // }
  OnFormSubmit(userForm: NgForm) {
    debugger;
    if (userForm.invalid) {
      
      return;
    }
    console.log('User Form ' + userForm.controls['username']?.value);
    console.log('User Form ' + userForm.controls['gender']?.value);
    console.log('User Form ' + userForm.controls['isMarried']?.value);
    console.log('User Form ' + userForm.controls['isTCAccepted']?.value);

  }


  setDefaultValue() {
    // Set default values for the form
    this.user = new User();
    this.user.username = "Dineshyaduvanshee";
    this.user.gender = "male";
    this.user.isMarried = true;
    this.user.isTCAccepted = true;
  }

  resetForm() {
    // Reset the form
    this.user = new User();
    
  }
}

