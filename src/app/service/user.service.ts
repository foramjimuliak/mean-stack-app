import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {
    
    private url = environment.API_URL + 'api/search';

    constructor(private http: HttpClient) { }

    //service to get list of users that starts with searchField
    getUsers(searchField) {
        return this.http.post(`${this.url}`,{searchField : searchField});
    }
    
}