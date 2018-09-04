import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[appMinLengthArray]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MinLengthArrayDirective,
    multi: true
  }]
})
export class MinLengthArrayDirective implements Validator {

  @Input('appMinLengthArray') minimo: number;

  constructor() { }

  validate(c: AbstractControl): ValidationErrors | null {
    if (c.value && c.value.length < this.minimo) {
      return {
        minLengthArray: {
            valor: this.minimo
        }
      };
    }

    return undefined;
  }

}
