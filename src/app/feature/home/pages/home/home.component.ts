import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../account/services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule]
})
export class HomeComponent {

  isAuthenticated: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }
  
  ngOnInit() {
    this.isAuthenticated = this.userService.isAuthenticated();
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToDashboard() {
    const role = this.userService.getRole();
    if (role === 'admin') {
      this.router.navigate(['/dashboard']);
    } else {
      alert('No tienes acceso al Dashboard, solo los administradores pueden verlo.');
    }
  }

}
