import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { NewUser } from "./new-user";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class SignupService {
    constructor(private http: HttpClient) {}

    signup(newUser: NewUser): Observable<void> {
        return this.http.post<void>(environment.api + '/usuarios/add', newUser);
    }
}