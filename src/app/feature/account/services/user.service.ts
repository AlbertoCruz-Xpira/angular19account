import { Injectable } from '@angular/core';
import { User } from '../../../core/modals/user';
import { USERS } from '../../../../assets/mockups/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor() {}

  /**
   * Simula un inicio de sesión de usuario.
   * @param email El email del usuario
   * @param password La contraseña del usuario
   * @returns 'success' si las credenciales son correctas, o un mensaje de error.
   */
  login(email: string, password: string): string {
    const user = USERS.find(user => user.email === email && user.password === password);
    if (user) {
      const token = `token-${user.email}-${new Date().getTime()}`;
      localStorage.setItem('authToken', token); // Guardamos el token en el localStorage
      localStorage.setItem('role', user.role);
      return 'success';
    } else {
      return 'Invalid email or password';
    }
  }

  /**
   * Devuelve la lista de usuarios.
   * @returns El array de usuarios
   */
  getUsers(): User[] {
    return USERS;
  }

  /**
   * Obtiene el token de autenticación desde el localStorage.
   * @returns El token si está presente, o null si no hay token.
   */
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  /**
   * Obtiene el rol del usuario desde el localStorage.
   * @returns El rol del usuario si está presente, o null si no hay rol.
   */
  getRole(): string | null {
    return localStorage.getItem('role');
  }

  /**
   * Verifica si el usuario está autenticado basándose en la existencia de un token en el localStorage.
   * @returns true si el token existe, false si no está autenticado.
   */
  isAuthenticated(): boolean {
    return localStorage.getItem('authToken') !== null;
  }

  /**
   * Elimina el token y el rol del localStorage para realizar el logout.
   */
  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('role');
  }

}
