import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from './signin/signin.component';
import { VMessageModule } from "../components/vmessage/vmessage.module";

@NgModule({
    declarations: [SignupComponent, SigninComponent],
    imports: [
        CommonModule,   
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        VMessageModule
    ]
})
export class HomeModule {

}