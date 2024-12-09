import { Injectable } from '@angular/core';
import { USERS } from '../../../../assets/mockups/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor() {}

  login(email: string, password: string): string {
    const user = USERS.find(user => user.email === email && user.password === password);
    if (user) {
      const token = `token-${user.email}-${new Date().getTime()}`;
      localStorage.setItem('authToken', token); // Guardamos el token en el localStorage
      return 'success';
    } else {
      return 'Invalid email or password';
    }
  }

  getUsers() {
    return USERS;
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('authToken') !== null;
  }

  logout(): void {
    localStorage.removeItem('authToken');
  }
}
