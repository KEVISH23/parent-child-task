import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true }]
})
export class EmailValidatorDirective implements Validator {
  private pattern = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,'i')
  constructor() { }
  validate(control: AbstractControl): { [key: string]: any } | null {
      const forbidden = this.pattern.test(control.value);
      return !forbidden ? { 'invalidEmail':true } : null;
  }
}


// validate(control: AbstractControl): ValidationErrors | null {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!control.value) {
//     return null;

//   }
//   console.log(control.value);
  
//   const isValid = emailRegex.test(control.value);
//   return isValid ? null : { 'invalidEmail': true };
// }