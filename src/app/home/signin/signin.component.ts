import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NewUser } from '../model/new-user';
import { UsuarioService } from '../usuarioService/usuario.service';

@Component({
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {

  usuario: NewUser = new NewUser();
  loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private signupService: UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      idUsuario: [this.usuario.idUsuario, Validators.required],
      senha: [this.usuario.senha, Validators.required]
    });
  }

  login() {
    const newUser = this.loginForm.getRawValue() as NewUser;

    this.signupService.signin(newUser).subscribe(() => this.router.navigate(['/clientes/list']));
  }

}