import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { VMessageModule } from "../components/vmessage/vmessage.module";
import { SignupComponent } from "./signup/signup.component";

@NgModule({
    declarations: [SignupComponent],
    imports: [
        CommonModule,   
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        VMessageModule,
        HttpClientModule
    ]
})
export class HomeModule {

}