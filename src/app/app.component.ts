import { Component } from '@angular/core';
import {Desenvolvedor} from './desenvolvedor/entity/desenvolvedor.entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  desenvolvedor;

  desenvolvedores = [
    new Desenvolvedor(
      'Gabriel Silva',
      'Arquiteto',
      ['Java', 'Angular'],
      new Date(2016, 2, 1),
      0
    ),
    new Desenvolvedor(
      'Jessica Etiene',
      'Implementadora',
      ['Java', 'Angular'],
      new Date(2014, 2, 1),
      1
    ),
    new Desenvolvedor(
      'Antenor',
      'Arquiteto',
      ['Java', 'Angular'],
      new Date(2015, 2, 1),
      0
    ),
    new Desenvolvedor(
      'Willian',
      'Implementador',
      ['Java', 'Angular'],
      new Date(2014, 2, 1),
      0
    )
  ];

  desenvolvedorSelecionado(desenvSelecionado) {
    this.desenvolvedor = desenvSelecionado;
    console.log(desenvSelecionado);
  }


}
