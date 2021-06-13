import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  logIn(name: string, password: string) {
    console.log(123);
    return this.http.post<any>(environment.url + "/users/login",
      {
        nickname: name,
        password: password
      });
  }
}
