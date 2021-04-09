import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from 'src/app/clientes/clientes-service/clientes-service';
import { Cliente } from 'src/app/clientes/model/cliente';
import { Endereco } from '../model/endereco';
import { EnderecoService } from '../serviceEndereco/enderecoService';

@Component({
  selector: 'app-enderecos-form',
  templateUrl: './enderecos-form.component.html'
})
export class EnderecosFormComponent implements OnInit {
  cliente: Cliente = new Cliente();
  enderecoForm!: FormGroup;
  endereco: Endereco = new Endereco();

  constructor(private formBuilder: FormBuilder,
    private enderecoService: EnderecoService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private clienteService: ClientesService) {
    this.initForm(this.endereco);
  }

  ngOnInit(): void {
    console.log(this.activatedRoute);
    this.activatedRoute.queryParams.subscribe(params => {
      console.log('####### ', params);
      if (params['data']) {
        this.cliente = JSON.parse(params['data']) as Cliente;
      }
      
      if (params['end']) {
        console.log('%%%%' , params['end'])
        this.endereco = JSON.parse(params['end']) as Endereco;
      }

      this.initForm(this.endereco);

    });
  }

  initForm(endereco: Endereco) {
    this.enderecoForm = this.formBuilder.group({
      id: [this.endereco.id, [Validators.required]],
      idCliente: [this.endereco.idCliente, [Validators.required]],
      tipoEndereco: [this.endereco.tipoEndereco, [Validators.required, Validators.maxLength(1)]],
      rua: [this.endereco.rua, [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      bairro: [this.endereco.bairro, [Validators.required, Validators.minLength(2), Validators.maxLength(14)]],
      cep: [this.endereco.cep, [Validators.required, Validators.minLength(8)]],
      cidade: [this.endereco.cidade, [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      uf: [this.endereco.uf, [Validators.required, Validators.minLength(2)]],
      numero: [this.endereco.numero, [Validators.required]]
    });
    

  }

  cadastrar() {
    this.endereco = this.enderecoForm.getRawValue() as Endereco;
    if (this.cliente.endereco === null) {
      this.cliente.endereco = [];
      this.cliente.endereco.push(this.endereco);
    } else {
      this.cliente.endereco.push(this.endereco)
    }
    this.clienteService.cadastraCliente(this.cliente).subscribe( () => {
      console.log('SSSSSSSSS ',this.cliente.id);
      this.router.navigate(["/clientes/list"]);
    });
  }

  alterarEndereco() {
    this.endereco = this.enderecoForm.getRawValue() as Endereco;
    this.enderecoService.cadastrar(this.endereco).subscribe(() => {
      
      
      this.router.navigate(["/cliente", this.endereco.idCliente]);
    });

  }

}
