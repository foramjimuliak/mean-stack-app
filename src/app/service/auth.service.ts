import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

    private url = environment.API_URL;

    constructor(private http: HttpClient,private router : Router) {  }

    login(username: string, password: string) {
        return this.http.post<any>(this.url + `api/auth`, { username: username, password: password })
        .pipe(map(user => {

            // login successful if there's a jwt token in the response
            if (user && user.accessToken) {

                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user.accessToken));
            }
            return user;
        }));
    }

    logout() {

        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);

    }
}