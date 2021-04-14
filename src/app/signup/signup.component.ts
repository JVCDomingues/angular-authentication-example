import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth/auth.service';

interface Message {
  severity: string;
  summary: string;
  detail: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
  registerError: boolean = false;

  message: Message[];

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [ Validators.required, Validators.email ]],
      password: ['', [ Validators.required, Validators.minLength(4) ]]
    });
  }

  handleSubmit() {
    const name = this.registerForm.get('name').value;
    const email = this.registerForm.get('email').value;
    const password = this.registerForm.get('password').value;

    this.authService.register(name, email, password)
      .subscribe(() => {
        this.router.navigate(['']);

      }, err => {
        console.log(err);
        this.registerError = true;
        this.message = [
          { severity: 'error', summary: 'Error', detail: 'User already exists' }
        ]
      })
  }

}
