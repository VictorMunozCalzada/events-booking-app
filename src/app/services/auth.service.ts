import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
    private _isLoggedIn = new BehaviorSubject(false);
    public isLoggedIn = this._isLoggedIn.asObservable();

  constructor(private userService: UserService) {}


  login(username: string, password: string): User | null {

    let userBoard = [];
    userBoard = this.userService.getUserBoard();
    let userSend!:User;

    userBoard.forEach((user: User) => {
      if(user.username === username && user.password === password) {
        this._isLoggedIn.next(true);
        userSend = user;
      }
    });
    return userSend;
    };

    logout(): void {
          this._isLoggedIn.next(false);
      };

  register(user:User):void {
     this.userService.addUser(user);

  }
}
