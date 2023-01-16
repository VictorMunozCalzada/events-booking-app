import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  maritalStatusOptions:string [] = [];
  status = "";
  interestsList:string [] = [];
  interestsChecked = [];
  

  data!:string;

  registerForm=new FormGroup({
    username:new FormControl('',[
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(20)]),

    password: new FormControl('',[
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$')]),

    retryPassword: new FormControl('',[
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$')]),

    email: new FormControl('',[
      Validators.required,
      //Validators.email
      Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]),

    maritalStatus: new FormControl(false, [Validators.requiredTrue]),

    //gender: new FormControl(this.changeGender,[Validators.requiredTrue]),

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
    this.maritalStatusOptions = ['Soltero', 'Casado', 'Divorciado'];
  }

  changeStatus(e?: any) {
    console.log(e.target.value);

   if(this.maritalStatusOptions.includes(e.target.value)){
    this.registerForm.controls.maritalStatus.setValue(e.target.value, {
      onlySelf: true
    });
    console.log('true')
   }else {
    console.log('false')
   }
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





  submit(){
    this.data=`
    Username:${this.registerForm.value.username}
    Contraseña:${this.registerForm.value.password}
    Email:${this.registerForm.value.email}
    Estado civil:${this.registerForm.value.maritalStatus}
    `

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
