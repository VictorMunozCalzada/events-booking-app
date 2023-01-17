import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  maritalStatusOptions:string [] = [];
  interestsList:string [] = [];
  interestsChecked :string[]= [];
  

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
  
  ngOnInit(): void {
    this.data="";
    this.interestsList = ['Juegos', 'Deportes', 'Moda'];
    this.maritalStatusOptions = ["",'Soltero', 'Casado', 'Divorciado'];
  }

  changeStatus(e?: any) {
    console.log(e.target.value);
  }

  changeGender(e?: any) {
    console.log(e.target.value);
     if (e.target.value === "man" || e.target.value === "woman") {
      console.log('true');
      return true;
  
     }else {
      console.log('false');
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


  submit(){
    alert(
    this.data=`
    Username:${this.registerForm.value.username}
    Contraseña:${this.registerForm.value.password}
    Email:${this.registerForm.value.email}
    Estado civil:${this.registerForm.value.maritalStatus}
    Genero:${this.registerForm.value.gender}
    Intereses:${""}
    `)
  }
}

// function requireCheckboxesToBeCheckedValidator(minRequired = 1): ValidatorFn {
//   function validate (formGroup: FormGroup) {
//     let checked = 0;

//     Object.keys(formGroup.controls).forEach(key => {
//       const control = formGroup.controls[key];

//       if (control.value === true) {
//         checked ++;
//       }
//     });

//     if (checked < minRequired) {
//       return {
//         requireOneCheckboxToBeChecked: true,
//       };
//     }

//     return null;
//   };
// }
