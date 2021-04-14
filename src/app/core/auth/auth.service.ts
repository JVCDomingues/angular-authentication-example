import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";

import { UserAuthenticated } from '../../types/User';
import { TokenService } from '../token/token.service';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseURL = 'http://localhost:4000/auth';
  
  constructor(private http: HttpClient, private tokenService: TokenService, private userService: UserService) { }

  signIn(email: string, password: string): Observable<UserAuthenticated> {
    return this.http.post<UserAuthenticated>(this.baseURL + '/authenticate', { email, password })
      .pipe(tap(res => {
        const username = res.user.name;
        const authToken = res.token;

        this.tokenService.setToken(authToken);
        this.userService.saveUser(username);

        console.log(`User ${username} authenticated with token ${authToken}`);
      }));
  }

  register(name: string, email: string, password: string) {
    return this.http.post(this.baseURL + '/register', { name, email, password })
      .pipe(tap(console.log));
  }

}
