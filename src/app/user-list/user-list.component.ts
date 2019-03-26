import { Component, OnInit } from '@angular/core';
import User from '../model/User';
import { UserService } from '../service/user.service';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {

    users: User[];

    constructor(private userService: UserService,private authService: AuthService ) { }

    ngOnInit() {

        //get list of all users oninit
        this.getUsers('');
    }

    onSearchChange(user){

        //get list of users that starts with search term 
        this.getUsers(user);
    }

    /**
    * @method Gets Users
    * @param searchField
    * @returns List of Users
    */
    getUsers(searchField) {
        this.userService.getUsers(searchField)
        .subscribe((data: User[]) => {
            this.users = data;
        });
    }

    logout() {
        this.authService.logout();
    }
}
