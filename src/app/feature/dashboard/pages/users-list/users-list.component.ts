import { Component, OnInit } from '@angular/core';
import { User } from '../../../../core/modals/user';
import { UserService } from '../../../account/services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  imports: [CommonModule]
})
export class UsersListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
}
