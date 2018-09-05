import { Component } from '@angular/core';
import {Desenvolvedor} from './desenvolvedor/entity/desenvolvedor.entity';
import {HttpClient} from "@angular/common/http";
import {DesenvolvedorService} from "./integracao/desenvolvedor.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  desenvolvedor;

  desenvolvedores = [];

  constructor(
    private desenvolvedorService: DesenvolvedorService
  ) {

    this.desenvolvedorService.buscaDesenvolvedores()
      .subscribe(desenvs => {
        this.desenvolvedores = desenvs;
      });

  }

  desenvolvedorSelecionado(desenvSelecionado) {
    this.desenvolvedor = desenvSelecionado;
    console.log(desenvSelecionado);
  }

  propriedadeSelecionada(evt) {
    console.log(evt.nomeAtributo, evt.valor);
  }
}
