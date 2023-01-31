import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  isLoggedIn = false;
  username!: string;
  role!:string;
  email!:string;
  gender!:string;
  civilStatus!:string;
  interests!:string

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    // Check if user is in sessionStorage
    this.isLoggedIn = this.storageService.isLoggedIn();
    // Check the obserbable status
    // this.authService.isLoggedIn.subscribe(status => this.isLoggedIn = status);

    if (this.isLoggedIn) {
    
      this.username = this.storageService.getUser()._username;
      this.role = this.storageService.getUser()._role;
      this.email = this.storageService.getUser()._email;
      this.gender = this.storageService.getUser()._gender;
      this.civilStatus = this.storageService.getUser()._civilStatus;
      this.interests = this.storageService.getUser()._interest_info;
    }
  }
}
