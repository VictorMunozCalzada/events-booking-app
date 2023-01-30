import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator,NG_VALIDATORS } from '@angular/forms';


@Directive({
  selector: '[appCheckMaritalStatus]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting: CheckMaritalStatusDirective,
    multi:true
  }]
})
export class CheckMaritalStatusDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {

    if((control.value=="Soltero/a")||(control.value=="Casado/a")||(control.value=="Divorciado/a")){
      return null;//cuando no hay error
    }else{
      return {'checkMaritalStatus': true};
    }
  }
}
