import { Component, OnInit } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-lista-valores',
  templateUrl: './lista-valores.component.html',
  styleUrls: ['./lista-valores.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ListaValoresComponent,
      multi: true
    }
  ]
})
export class ListaValoresComponent implements OnInit, ControlValueAccessor {

  private _valor: string;
  disabilitado: any;

  private onChange: any = () => {};
  onTouched: any = () => {};

  constructor() { }

  ngOnInit() {}

  get valor() {
    return this._valor;
  }

  set valor(valor) {
    this._valor = valor;

    if (valor) {
      this.onChange(valor.split('\n'));
    } else {
      this.onChange(undefined);
    }
  }

  writeValue(obj: string[]): void {
    /*
    this.valor = '';
    for (let o of obj) {
      this.valor += o + '\n';
    }
    */

    if (obj) {
      this.valor = obj.join('\n');
    } else {
      this.valor = undefined;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabilitado = isDisabled;
  }

}
