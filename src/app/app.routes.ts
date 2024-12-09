import { Routes } from '@angular/router';
import { LoginComponent } from './feature/account/pages/login/login.component';
import { RegisterComponent } from './feature/account/pages/register/register.component';
import { ForgetPasswordComponent } from './feature/account/pages/forget-password/forget-password.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
