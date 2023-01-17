import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator,NG_VALIDATORS } from '@angular/forms';


@Directive({
  selector: '[appCheckPass]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting: CheckPassDirective,
    multi:true
  }]
})
export class CheckPassDirective implements Validator{

  @Input() parametro:any;

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {

    if(control.value!= this.parametro){
      return {'checkPass': true}; //cuando hay error
    }else{
      return null;//cuando no hay error
    }
  }

}

