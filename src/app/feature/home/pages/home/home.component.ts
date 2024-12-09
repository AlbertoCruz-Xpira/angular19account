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
    if (this.isAuthenticated) this.goToDashboard();
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

}
