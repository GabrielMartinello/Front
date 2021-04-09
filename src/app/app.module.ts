import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ClientesModule } from './clientes/clientes.module';
import { ErrorsModule } from './errors/errors.module';
import { HomeModule } from './home/home.module';
import { EnderecosModule } from './enderecos/enderecos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ErrorsModule,
    ClientesModule,
    EnderecosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
