import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {
    
    private url = environment.API_URL;
    private currentUser = JSON.parse(localStorage.getItem('currentUser'));

    constructor(private http: HttpClient) { }

    //service to get list of users that starts with searchField
    getUsers(searchField: string) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ this.currentUser
        });
        let options = { headers: headers };
        return this.http.post<any>(this.url + `api/search`, { searchField : searchField },{headers: headers})
        .pipe(map(user => {
            return user;
        }));
    }
    
}