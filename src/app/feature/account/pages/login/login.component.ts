import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule,FormsModule]
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  // login(): void {
  //   this.userService.getUsers().subscribe(users => {
  //     const user = users.find(u => u.email === this.email && u.password === this.password);
  //     if (user) {
  //       alert('Login successful!');
  //     } else {
  //       this.errorMessage = 'Invalid email or password';
  //       alert(this.errorMessage);
  //     }
  //   });
  // }

  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  login(): boolean {
    const user = this.users.find(user => user.email === this.email && user.password === this.password);
    if (user) {
      alert('Login successful!');
      return true;
    } else {
      this.errorMessage = 'Invalid email or password';
      alert(this.errorMessage);
      return false;
    }
  }
}
