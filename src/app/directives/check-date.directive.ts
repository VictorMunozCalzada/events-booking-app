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

console.log("control.value"+control.value);

const now = new Date();
const then = new Date(control.value);
console.log(now);
console.log(then);

let dayDif = then.getTime() - now.getTime();
dayDif=dayDif / (1000 * 3600 * 24);

console.log('then is', dayDif, 'days more than now.');

if (dayDif < 365) {
  console.log("netra en if");
  return null;
}else{
  console.log("netra en else");
  return {'CheckDateDirective': true};
}
}
}