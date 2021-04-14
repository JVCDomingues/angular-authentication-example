import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from 'primeng/api';

import { TokenService } from 'src/app/core/token/token.service';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuItems: MenuItem[];

  constructor(
    private userService: UserService,  
    private tokenService: TokenService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    const username = this.userService.getUser();
    this.menuItems = [
      {
        label: `Hello ${username}`,
        icon: 'pi pi-user'  
      }
    ];
  }

  logOut() {
    this.userService.removeUser();
    this.tokenService.removeToken();
    this.router.navigate(['']);
  }

}
