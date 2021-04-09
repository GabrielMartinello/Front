import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Endereco } from "../model/endereco";

@Injectable({providedIn: 'root'})
export class EnderecoService {
    constructor(private http: HttpClient) {}

    cadastrar(endereco: Endereco): Observable<void> {
        if(endereco.id) {
            return this.http.put<void>(environment.api + '/endereco/upd', endereco);
        }
        console.log(endereco);
        return this.http.post<void>(environment.api + '/endereco/add', endereco);
    }

    getEndereco(id: number): Observable<Endereco> {
        return this.http.get<Endereco>(`${environment.api}/endereco/${id}`);
    }
    
    deletarEndereco(id: number): Observable<void> {
        return this.http.delete<void>(environment.api + '/endereco/' + id);
    }
}