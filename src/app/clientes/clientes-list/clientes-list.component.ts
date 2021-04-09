import { templateJitUrl } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ClientesService } from "../clientes-service/clientes-service";
import { Cliente } from "../model/cliente";

@Component({
    selector: 'app-cliente-list-component',
    templateUrl: './clientes-list.component.html'
})
export class ClientesListComponent implements OnInit {
    clientes: Cliente[] = [];

    constructor(private clienteService: ClientesService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
    }
    ngOnInit(): void {
        this.listar();
    }

    listar() {
        this.clienteService.listar().subscribe(clientes => {    
            this.clientes = clientes;
        });
    }
    
    editarCliente(cliente: Cliente) {
        this.router.navigate(["/cliente", cliente.id]);
    }

    cadastrar() {
        this.router.navigate(['/cliente/add']);
    }

    deslogar() {
        this.router.navigate(['/usuario/login'])
    }

    deletar(index: number, cliente: Cliente) {
        this.clientes.splice(index,1);
        this.clienteService.remover(cliente.id).subscribe();
    }
}   