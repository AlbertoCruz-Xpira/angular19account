import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../../account/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [RouterModule]
})
export class DashboardComponent {
  menuOpen = false;

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  // Método para abrir y cerrar el menú lateral
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // Método para navegar al listado de usuarios (solo si es admin)
  navigateToUsersList() {
    if (this.userService.getRole() === 'admin') {
      this.router.navigate(['/dashboard/users-list']);
    } else {
      alert('Solo los administradores pueden acceder al listado de usuarios.');
    }
  }

  // Método para navegar al inicio
  navigateToHome() {
    this.router.navigate(['/home']);
  }

  // Método para cerrar sesión
  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
