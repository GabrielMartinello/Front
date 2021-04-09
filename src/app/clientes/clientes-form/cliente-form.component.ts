import { Component, OnInit } from "@angular/core";
import { Form, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Endereco } from "src/app/enderecos/model/endereco";
import { EnderecoService } from "src/app/enderecos/serviceEndereco/enderecoService";
import { ClientesService } from "../clientes-service/clientes-service";
import { Cliente } from "../model/cliente";

@Component({
    selector: 'app-cliente-form.component',
    templateUrl: './cliente-form.component.html'
})
export class ClienteFormComponent implements OnInit {


    clienteForm!: FormGroup;
    // enderecoForm!: FormGroup;
    cliente: Cliente = new Cliente();
    endereco: Endereco = new Endereco();
    // endereco!: Endereco[];

    constructor(private formBuilder: FormBuilder,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private clienteService: ClientesService,
        private enderecoService: EnderecoService
    ) { }

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(params => {
            console.log(params);
            if (params !== null ) {
                this.cliente = JSON.parse(params['data']) as Cliente;
            }        
          });

        this.clienteForm = this.formBuilder.group({
            id: [this.cliente.id],
            nome: [this.cliente.nome, [Validators.minLength(5), Validators.maxLength(100), Validators.required]],
            cnpjf: [this.cliente.cnpjf, [Validators.minLength(11), Validators.maxLength(14), Validators.required]],
            telefone: [this.cliente.telefone, [Validators.minLength(9), Validators.maxLength(11)]],
            tipoPessoa: [this.cliente.tipoPessoa, [Validators.maxLength(1)]],
            endereco: [this.cliente.endereco]
        });
        const id = this.activatedRoute.snapshot.params.id;
            if(id) {
                this.clienteService.getCliente(id).subscribe(cliente => {
                this.cliente = cliente;
                this.clienteForm.controls['id'].setValue(this.cliente.id);
                this.clienteForm.controls['nome'].setValue(this.cliente.nome);
                this.clienteForm.controls['cnpjf'].setValue(this.cliente.cnpjf);
                this.clienteForm.controls['telefone'].setValue(this.cliente.telefone);
                this.clienteForm.controls['tipoPessoa'].setValue(this.cliente.tipoPessoa);
                this.clienteForm.controls['endereco'].setValue(this.cliente.endereco);
                });
            }
    }

    irParaEnderecos() {
        console.log(this.clienteForm);
        console.log('#################Endereco ',this.endereco);
        
        this.cliente = this.clienteForm.getRawValue() as Cliente;
        console.log("clienteCadastro", this.cliente)    
        console.log(this.cliente);
            this.router.navigate(['/endereco/cadastrar'],
            { queryParams: { data: JSON.stringify(this.cliente) } });
    }

    editarEndereco(endereco: Endereco) {
        this.router.navigate(['/endereco/{{endereco.idCliente}}'], {queryParams: { end: JSON.stringify(endereco) }});
    }

    editarCliente() {
            this.cliente = this.clienteForm.getRawValue() as Cliente;
            this.clienteService.cadastraCliente(this.cliente).subscribe(() => {
              this.router.navigate(["/clientes/list"]);
            });
    }

    deletar(index: number, endereco: Endereco) {
        this.cliente.endereco.splice(index,1);
        this.enderecoService.deletarEndereco(endereco.id).subscribe();
    }

    voltar() {
        this.router.navigate(['../clientes/list']);
    }

    deletarCliente() {
        this.clienteService.remover(this.cliente.id).subscribe(() => {
            this.router.navigate(['/cliente/add']);
        });
        
    }

}