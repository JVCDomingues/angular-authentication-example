import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth/auth.service';

interface Message {
  severity: string;
  summary: string;
  detail: string;
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  @ViewChild('email') emailInput: ElementRef<HTMLInputElement>;

  message: Message[];

  constructor(
    private router: Router, 
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email] ],
      password: ['', [
        Validators.required,
        Validators.minLength(4)
      ]]
    })
  }

  submitForm() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;

    this.authService.signIn(email, password)
      .subscribe(() => {
        this.router.navigate(['home']);
      }, err => {
        const { error } = err;
        const { error: errorName } = error;

        this.message = [
          { severity: 'error', summary: 'Error', detail: errorName }  
        ];

        this.loginForm.reset();
        this.emailInput.nativeElement.focus();
      })

  }
}
