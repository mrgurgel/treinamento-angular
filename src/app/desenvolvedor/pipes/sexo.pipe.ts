import { Pipe, PipeTransform } from '@angular/core';
import {isNullOrUndefined} from 'util';

@Pipe({
  name: 'sexo'
})
export class SexoPipe implements PipeTransform {

  transform(sexo: number): any {
    if (!isNullOrUndefined(sexo)) {
      if (sexo == 0) {
        return 'Masculino';
      }

      if (sexo == 1) {
        return 'Feminino';
      }

      return 'Outros';
    }

    return null;
  }

}
