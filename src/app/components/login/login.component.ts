import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;  
  returnUrl: string = '';
  formvalid = false;

  constructor(private fb: FormBuilder, private _router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  getUserName() {
    return this.loginForm.controls['username'];
  }
  getPassword() {
    return this.loginForm.controls['password'];
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      alert("form valid.");
      this.formvalid = true;
      console.log('Form Submitted!', this.loginForm.value);
    } else {
      this.formvalid = false;
      alert("form invalid.");
      console.log('Form is invalid');
    }
  }


}
