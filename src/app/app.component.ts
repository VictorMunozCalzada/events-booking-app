import { Component, OnInit } from '@angular/core';
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

  constructor(private storageService: StorageService, private authService: AuthService) { }

  ngOnInit(): void {
    // Check the obserbable status
    this.authService.isLoggedIn.subscribe(status => this.isLoggedIn = status);
    // Check if user is in sessionStorage
    this.isLoggedIn = this.storageService.isLoggedIn();



    if (this.isLoggedIn) {
      this.username = this.storageService.getUser()._username;
      this.role = this.storageService.getUser()._role;


      console.log(this.user);
      console.log(this.username);
      console.log(this.role);
    }
  }
  
  getLogout(): void {
    this.storageService.removeUser();
    this.reloadPage();
    }
    
  reloadPage(): void {
    window.location.reload();
  }
}
