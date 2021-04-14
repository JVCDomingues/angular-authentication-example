import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenService } from '../token/token.service';

@Injectable({providedIn: 'root'})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router, private tokenService: TokenService) { }

  canActivate(): boolean {
    if(!this.tokenService.hasToken()) {
      this.router.navigate(['']);
      return false;
    }

    return true;
  }
  
}