import { Component, OnInit } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-select-sexo',
  templateUrl: './select-sexo.component.html',
  styleUrls: ['./select-sexo.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: SelectSexoComponent,
    multi: true
  }]
})
export class SelectSexoComponent implements OnInit, ControlValueAccessor {

  value: number;
  disabled: boolean;
  onChange: any = () => {};
  onTouched: any = () => {};

  constructor() { }

  ngOnInit() {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: number): void {
    this.value = obj;
  }

  seleciona(valor) {
    this.value = valor;
    this.onChange(valor);
  }

}
