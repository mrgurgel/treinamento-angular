import {Component, Input, OnInit} from '@angular/core';
import {Desenvolvedor} from '../entity/desenvolvedor.entity';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-form-desenvolvedor',
  templateUrl: './form-desenvolvedor.component.html',
  styleUrls: ['./form-desenvolvedor.component.css']
})
export class FormDesenvolvedorComponent implements OnInit {

  private _externalValue: Desenvolvedor;
  private _value: Desenvolvedor;

  constructor() {
  }

  ngOnInit() {
  }

  @Input() set value(value: Desenvolvedor) {
    this._externalValue = value;
    this._value = new Desenvolvedor(
      value.nome,
      value.cargo,
      value.especialidades,
      value.dataAdmissao,
      value.sexo
    );
  }

  get value() {
    return this._value;
  }

  submete(form: NgForm) {
    if (form.valid) {

      this._externalValue.nome = this._value.nome;
      this._externalValue.cargo = this._value.cargo;
      this._externalValue.especialidades = this._value.especialidades;
      this._externalValue.dataAdmissao = this._value.dataAdmissao;
      this._externalValue.sexo = this._value.sexo;

    }
  }
}
