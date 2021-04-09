import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Cliente } from "../model/cliente";

@Injectable({providedIn: 'root'})
export class ClientesService {
    constructor(private http: HttpClient) { }

    cadastraCliente(cliente: Cliente): Observable<void> {
        if(cliente.id) {
            return this.http.put<void>(environment.api + '/clientes/upd', cliente)
        }
        return this.http.post<void>(environment.api + '/clientes/add', cliente);
    }

    getCliente(id: number): Observable<Cliente> {
        return this.http.get<Cliente>(environment.api + '/clientes/' + id)
    }

    remover(id: number): Observable<void> {
        return this.http.delete<void>(environment.api + '/clientes/' + id);
    }

    listar():Observable<Cliente[]> {
        return this.http.get<Cliente[]>(environment.api + '/clientes/list')
    }
}
