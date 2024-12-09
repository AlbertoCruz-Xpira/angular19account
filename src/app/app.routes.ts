import { Routes } from '@angular/router';
import { LoginComponent } from './feature/account/pages/login/login.component';
import { RegisterComponent } from './feature/account/pages/register/register.component';
import { ForgetPasswordComponent } from './feature/account/pages/forget-password/forget-password.component';
import { UsersListComponent } from './feature/dashboard/pages/users-list/users-list.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'dashboard/users-list', component: UsersListComponent, canActivate: [AuthGuard] }, // Nueva ruta
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
