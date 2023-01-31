import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user!:User;
 
  
  maritalStatusOptions:string [] = [];
  interestsList:string [] = [];
  interestsChecked :string[]= [];
  genderList:string[]=[];
  
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  data!:string;

  registerForm=new FormGroup({
    
    username:new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      Validators.pattern("[A-Za-z]+")]),

    password: new FormControl('',[
      Validators.required,
      Validators.minLength(8),
      Validators.pattern("[A-Za-z0-9]+")]),

    retryPassword: new FormControl('',[
      Validators.required]),

    email: new FormControl('',[
      Validators.required,
      //Validators.email
      Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]),

    maritalStatus: new FormControl(),

    gender: new FormControl(),

    // gender: new FormControl(this.changeGender,[
    //   Validators.required]),

      interestsGroup: new FormGroup({
      Juegos: new FormControl(true),
      Deportes: new FormControl(true),
      Moda: new FormControl(true),
      }), // requireCheckboxesToBeCheckedValidator()), 

      acceptConditions: new FormControl(false, [Validators.requiredTrue]),

  })

  constructor(private authService: AuthService) {}
  
  ngOnInit(): void {
    this.data="";
    this.genderList=["Hombre","Mujer","Otros"]
    this.interestsList = ['Juegos', 'Deportes', 'Moda'];
    this.maritalStatusOptions = ["",'Soltero/a', 'Casado/a', 'Divorciado/a'];
  }

  changeGender(e?: any) {
     if (e.target.value === "man" || e.target.value === "woman") {
      return true;
  
     }else {
      return false;
     }
  }

  onCheckChange(e?: any) {

     if (this.interestsChecked.includes(e.target.value)) {
      for( var i = 0; i < this.interestsChecked.length; i++){ 
    
        if ( this.interestsChecked[i] == e.target.value) { 
    
          this.interestsChecked.splice(i, 1); 
        }
     }}
     else {
      this.interestsChecked.push(e.target.value)
      return ;
     }
  }

  submit():void {
    this.user= new User(
      this.registerForm.value.username!,
      this.registerForm.value.password!,
      this.registerForm.value.email!,
      this.registerForm.value.maritalStatus,
      this.registerForm.value.gender,
      this.interestsChecked
      )
      
    this.authService.register(this.user);
  }
}