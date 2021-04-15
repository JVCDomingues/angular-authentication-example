import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Projects } from 'src/app/types/Project';
import { TokenService } from '../token/token.service';

@Injectable({ providedIn: 'root' })
export class ProjectsService {

  baseURL = 'http://localhost:4000/projects';

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  getProjects(): Observable<Projects> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.tokenService.getToken()}`
    });

    return this.http.get<Projects>(this.baseURL, { headers })
      .pipe(tap(console.log));
  }
}