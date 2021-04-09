import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IConfig, NgxMaskModule } from "ngx-mask";
import { ClienteFormComponent } from "./clientes-form/cliente-form.component";
import { ClientesListComponent } from "./clientes-list/clientes-list.component";

// export const options: Partial<IConfig> | (() => Partial<IConfig>) = false;
@NgModule({
    declarations: [ClienteFormComponent, ClientesListComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgxMaskModule.forRoot()
    ]
})
export class ClientesModule {

}