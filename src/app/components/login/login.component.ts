import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import {Router} from "@angular/router"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };

  // Log in
  user!:User;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  role!:string;

  constructor(private authService: AuthService, private storageService: StorageService, private router: Router){}


  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.role = this.storageService.getUser()._role;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;
    this.user = this.authService.login(username, password)!;

    if(this.user != null) {
      // Save on SessionStorage
      this.storageService.saveUser(this.user);
      this.isLoginFailed = false;
      this.role = this.storageService.getUser()._role;
      console.log(this.role);
      this.router.navigate(['/'])
    }else {
      this.errorMessage = "error";
      this.isLoginFailed = true;
    }
  }

  reloadPage(): void {
    window.location.reload();
  }
}
