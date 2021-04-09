import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteFormComponent } from './clientes/clientes-form/cliente-form.component';
import { ClientesListComponent } from './clientes/clientes-list/clientes-list.component';
import { EnderecosFormComponent } from './enderecos/enderecos-form/enderecos-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { SigninComponent } from './home/signin/signin.component';
import { SignupComponent } from './home/signup/signup.component';

const routes: Routes = [
  {path: 'usuario/login', component: SigninComponent},
  {path: 'usuario/cadastrar', component: SignupComponent},
  {path: 'usuario/:idUsuario', component: SignupComponent},
  {path: 'cliente/add', component: ClienteFormComponent},
  {path: 'cliente/:id', component: ClienteFormComponent},
  {path: 'clientes/list', component: ClientesListComponent},
  {path: 'endereco/cadastrar', component: EnderecosFormComponent},
  {path: 'endereco/:id', component: EnderecosFormComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
