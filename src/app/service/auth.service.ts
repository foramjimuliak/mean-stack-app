import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

    private url = environment.API_URL;

    constructor(private http: HttpClient,private router : Router) {  }
    
    //service to login with username and password and get access token
    login(username: string, password: string) {
        return this.http.post<any>(this.url + `api/auth`, { username: username, password: password })
        .pipe(map(user => {
            if (user && user.accessToken) {
                localStorage.setItem('currentUser', JSON.stringify(user.accessToken));
            }
            return user;
        }));
    }
    
    logout() {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    }
}