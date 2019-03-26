import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './shared/auth-guard.service';
import { LoginGuard } from './shared/login-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ AuthService,AuthGuard,LoginGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
