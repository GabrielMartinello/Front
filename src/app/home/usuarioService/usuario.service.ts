import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { NewUser } from "../model/new-user";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class UsuarioService {
    constructor(private http: HttpClient) {}

    getUsuario(idUsuario: string): Observable<NewUser> {
        return this.http.get<NewUser>(`${environment.api}/usuarios/${idUsuario}`);
    }

    signup(newUser: NewUser): Observable<void> {
        if(newUser.idUsuario) {
            return this.http.put<void>(environment.api + '/usuarios/upd', newUser);
        }
        return this.http.post<void>(environment.api + '/usuarios/add', newUser);
    }
    
  signin(usuario: NewUser): Observable<NewUser> {      
    return this.http.post<NewUser>(environment.api + '/usuarios/login', usuario);
  }

    delete(idUsuario: string): Observable<void> {
        return this.http.delete<void>(environment.api + '/usuarios/' + idUsuario);
    }
}