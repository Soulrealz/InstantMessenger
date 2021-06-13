import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    register(user: User) {
        return this.http.post(`http://localhost:3000/users/register`, user);
    }

    logIn(name: string, password: string) {
        return this.http.post<any>(environment.url + "/users/login",
        {
                username: name,
                password: password
        });
    }

    setSession(authResult) {
        localStorage.setItem('id_token', authResult.token);
    }
}