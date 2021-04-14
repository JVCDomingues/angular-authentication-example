import { Injectable } from '@angular/core';

const KEY = 'user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  saveUser(username: string): void {
    window.localStorage.setItem(KEY, username);
  }

  getUser(): string {
    return window.localStorage.getItem(KEY);
  }

  removeUser(): void {
    window.localStorage.removeItem(KEY);
  }

}
