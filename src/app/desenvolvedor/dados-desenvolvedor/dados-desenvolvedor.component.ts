import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Desenvolvedor } from '../entity/desenvolvedor.entity';

@Component({
  selector: 'app-dados-desenvolvedor',
  templateUrl: './dados-desenvolvedor.component.html',
  styleUrls: ['./dados-desenvolvedor.component.css']
})
export class DadosDesenvolvedorComponent implements OnInit {

  @Input() value: Desenvolvedor;

  constructor() { }

  ngOnInit() {}

}
