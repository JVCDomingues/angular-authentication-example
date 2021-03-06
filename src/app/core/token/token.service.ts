import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  
  getToken(): string {
    return window.localStorage.getItem(KEY);
  }

  hasToken(): boolean {
    return !!this.getToken();
  }

  setToken(token: string): void {
    window.localStorage.setItem(KEY, token)
  }

  removeToken(): void {
    window.localStorage.removeItem(KEY);
  }
}