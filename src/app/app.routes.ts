import { Routes } from '@angular/router';
import { LoginComponent } from './feature/account/pages/login/login.component';
import { RegisterComponent } from './feature/account/pages/register/register.component';
import { ForgetPasswordComponent } from './feature/account/pages/forget-password/forget-password.component';
import { UsersListComponent } from './feature/dashboard/pages/users-list/users-list.component';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './feature/home/pages/home/home.component';
import { DashboardComponent } from './feature/dashboard/pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'dashboard', component: DashboardComponent, children: [
      { path: 'users-list', component: UsersListComponent, canActivate: [AuthGuard] }
  ]},
];
