import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './shared/auth-guard.service';
import { LoginGuard } from './shared/login-guard.service';

const routes: Routes = [
  {
    path: 'user/list',
    canActivate: [AuthGuard],
    component: UserListComponent
  },
  { 
    path: 'login',
    canActivate: [LoginGuard],
    component: AuthComponent
   },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
