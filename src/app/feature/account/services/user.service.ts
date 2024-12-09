import { Injectable } from '@angular/core';
import { USERS } from '../../../../assets/mockups/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor() {}

  // Retorna el objeto USERS importado
  getUsers() {
    return USERS;
  }
}
