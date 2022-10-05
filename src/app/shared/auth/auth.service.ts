import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  userName: string | null = null;

  constructor() {}

  login() {
    this.userName = 'Max';
  }

  logout() {
    this.userName = null;
  }
}
