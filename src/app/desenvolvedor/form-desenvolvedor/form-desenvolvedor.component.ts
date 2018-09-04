import {Component, Input, OnInit} from '@angular/core';
import {Desenvolvedor} from '../entity/desenvolvedor.entity';

@Component({
  selector: 'app-form-desenvolvedor',
  templateUrl: './form-desenvolvedor.component.html',
  styleUrls: ['./form-desenvolvedor.component.css']
})
export class FormDesenvolvedorComponent implements OnInit {

  @Input() value: Desenvolvedor;

  constructor() { }

  ngOnInit() {}

}
