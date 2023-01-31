import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator,NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appCheckDate]',
    providers:[{
    provide:NG_VALIDATORS,
    useExisting: CheckDateDirective,
    multi:true
  }]
})
export class CheckDateDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {


const now = new Date();
const then = new Date(control.value);

let dayDif = then.getTime() - now.getTime();
dayDif=dayDif / (1000 * 3600 * 24);


if (dayDif < 365) {
  return null;
}else{
  return {'CheckDateDirective': true};
}
}
}