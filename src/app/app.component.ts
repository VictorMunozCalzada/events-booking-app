import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from './models/user/user';
import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'events-booking-app';

  isLoggedIn = false;

  user!:User;
  username!: string;
  role!:string;

  constructor(private storageService: StorageService, private authService: AuthService , private userCookie: CookieService, private router: Router) { }

  ngOnInit(): void {
    // Check the obserbable status
    this.authService.isLoggedIn.subscribe(status => {this.isLoggedIn = status; console.log("isLogged " ,this.isLoggedIn)});
    // Check if user is in localStorage
    this.isLoggedIn = this.storageService.isLoggedIn();



    if (this.isLoggedIn) {
      this.username = this.storageService.getUser()._username;
      this.role = this.storageService.getUser()._role;
    }
  }
  
  getLogout(): void {
    this.storageService.removeUser();
    this.userCookie.delete('userCookie');
    this.authService.logout();
    this.router.navigate(['/'])
    }
    
  reloadPage(): void {
    window.location.reload();
  }
}
