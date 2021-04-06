import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewUser } from './new-user';
import { SignupService } from './signup.service';

@Component({
  selector: 'ap-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, 
              private signupService: SignupService,
              private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      //array de validadores
      idUsuario: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(40), Validators.email]],
      nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50),Validators.pattern(/^[a-z0-9_\-]+$/)]],
      senha:['', [Validators.required, Validators.minLength(8), Validators.maxLength(14)]]
    });
  }

  signup() {
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.signupService.signup(newUser).subscribe();
  }

}
