
import { Endereco } from "src/app/enderecos/model/endereco";

export class Cliente {
    id!: number;
    nome!: string;
    cnpjf!: string;
    telefone!: string;
    tipoPessoa!: string;
    endereco!: Array<Endereco>;
}