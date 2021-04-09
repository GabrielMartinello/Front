
import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxMaskModule } from "ngx-mask";
import { EnderecosFormComponent } from "./enderecos-form/enderecos-form.component";

@NgModule({
    declarations: [EnderecosFormComponent],
    imports:[
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NgxMaskModule.forRoot()
    ]
 
})
export class EnderecosModule {

}