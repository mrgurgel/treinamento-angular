import { Component, OnInit } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-select-data',
  templateUrl: './select-data.component.html',
  styleUrls: ['./select-data.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: SelectDataComponent,
    multi: true
  }]
})
export class SelectDataComponent implements OnInit, ControlValueAccessor {

  private _dia: number;
  private _mes: number;
  private _ano: number;
  private onChange: any = () => {};

  dias: number[];
  meses: number[];
  anos: number[];

  onTouched: any = () => {};
  disabled: boolean;

  constructor() {
    this.meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    this.anos = [];
    for (let i = new Date().getFullYear() - 100; this.anos.length <= 200; i++) {
      this.anos.push(i);
    }
    this.updateDias();
  }

  updateDias() {
    if (this.mes) {

      switch (Number(this.mes)) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
          this.dias = this.generate(1, 31);
          break;

        case 4:
        case 6:
        case 9:
        case 11:
          this.dias = this.generate(1, 30);
          break;

        case 2:
          if (this.ano && ((this.ano % 100 !== 0 && this.ano % 4 === 0) || this.ano % 400 === 0)) {
            this.dias = this.generate(1, 29);
          } else {
            this.dias = this.generate(1, 28);
          }

      }

    } else {
      this.dias = this.generate(1, 31);
    }
  }

  private generate(from: number, to: number) {
    const arr = [];
    for (let i = 0; i + from <= to; i++) {
      arr[i] = i + from;
    }
    return arr;
  }

  set dia(dia: number) {
    this._dia = dia;

    this.checkChange();
  }

  get dia() {
    return this._dia;
  }

  set mes(mes: number) {
    this._mes = mes;

    this.updateDias();

    this.checkChange();
  }

  get mes() {
    return this._mes;
  }

  set ano(ano: number) {
    this._ano = ano;

    this.updateDias();

    this.checkChange();
  }

  get ano() {
    return this._ano;
  }

  ngOnInit() {}

  private checkChange() {
    if (this.dia && this.mes && this.ano) {
      this.onChange(new Date(this.ano, this.mes - 1, this.dia));
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: Date): void {
    if (obj) {
      this._dia = obj.getDate();
      this._mes = obj.getMonth() + 1;
      this._ano = obj.getFullYear();
    } else {
      this._dia = undefined;
      this._mes = undefined;
      this._ano = undefined;
    }
  }

}
