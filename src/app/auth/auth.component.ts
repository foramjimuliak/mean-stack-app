import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';

@Component({
    selector: 'auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {

    loginForm: FormGroup;
    submitted = false;
    error: String;

    constructor( private formBuilder: FormBuilder,private route: ActivatedRoute,private router: Router,private authenticationService: AuthService, ) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get fields() { 
        return this.loginForm.controls;
    }

     /**
    * @method On Login Form Submit
    */
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.authenticationService.login(this.fields.username.value, this.fields.password.value)
        .pipe(first()).subscribe(data => {
            this.router.navigate(['/user/list']);
        },
        error => {
            this.error = error;
        });
    }
}