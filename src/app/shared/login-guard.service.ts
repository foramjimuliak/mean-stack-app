import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from "@angular/router";

@Injectable()
export class LoginGuard implements CanActivate {

constructor( private router:Router ) { }

  canActivate() {
    if(localStorage.getItem('currentUser') === null) {
        return true;
    }
    else {
        this.router.navigate(['/user/list']);
    }
  }
}