import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const loginResponse = this.userService.login(this.email, this.password);

      if (loginResponse == 'success') {
        this.router.navigate(['/dashboard']);
        this.errorMessage = '';
      } else {
        this.errorMessage = loginResponse;
      }
    } else {
      this.errorMessage = 'Por favor, completa los campos correctamente';
    }
  }
}
