import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NewUser } from '../model/new-user';
import { UsuarioService } from '../usuarioService/usuario.service';

@Component({
  selector: 'ap-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;
  newUser: NewUser = new NewUser();
  constructor(private formBuilder: FormBuilder, 
              private signupService: UsuarioService,
              private router: Router,
              private acitveRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      //array de validadores
      idUsuario: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(40)]],
      nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50),Validators.pattern(/^[a-z0-9_\-]+$/)]],
      senha:['', [Validators.required, Validators.minLength(8), Validators.maxLength(14)]]
    });
    const id = this.acitveRouter.snapshot.params.idUsuario;
    console.log(id);
    
    if(id) {
      this.signupService.getUsuario(id).subscribe(usuario => {
        this.newUser = usuario;
        this.signupForm.controls['idUsuario'].setValue(this.newUser.idUsuario);
        this.signupForm.controls['nome'].setValue(this.newUser.nome);
        this.signupForm.controls['senha'].setValue(this.newUser.senha);
      })
    }
  }

  signup() {
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.signupService.signup(newUser).subscribe(() => this.router.navigate(['/usuario/login']));
  }

  deletar(): void {
    this.signupService.delete(this.newUser.idUsuario);
  }

}
