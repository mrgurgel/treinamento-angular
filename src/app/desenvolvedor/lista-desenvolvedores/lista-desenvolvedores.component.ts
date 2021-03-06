import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Desenvolvedor} from '../entity/desenvolvedor.entity';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-lista-desenvolvedores',
  templateUrl: './lista-desenvolvedores.component.html',
  styleUrls: ['./lista-desenvolvedores.component.css']
})
export class ListaDesenvolvedoresComponent implements OnInit {

  @Input() values: Array<Desenvolvedor>;

  @Output() select = new EventEmitter<Desenvolvedor>();

  constructor() { }

  ngOnInit() {

  }

  emiteEvento(desenvolvedor: Desenvolvedor) {
    this.select.emit(desenvolvedor);
  }

}
