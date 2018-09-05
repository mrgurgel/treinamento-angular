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


    this.buscaDesenvolvedores();

  }

  buscaDesenvolvedores() {
    this.desenvolvedorService.buscaDesenvolvedores()
      .subscribe(desenvs => {
        this.desenvolvedores = desenvs;
      });
  }

  salvaAlteracoes() {
    this.desenvolvedorService
      .cadastra(this.desenvolvedor)
      .subscribe(() => {
        this.desenvolvedor = undefined;
        this.buscaDesenvolvedores();
      }, err => {
        window.alert(err.error.message);
      });
  }

  cadastrarNovo() {
    this.desenvolvedor = new Desenvolvedor();
  }

  desenvolvedorSelecionado(desenvSelecionado) {
    this.desenvolvedor = desenvSelecionado;
    console.log(desenvSelecionado);
  }

  propriedadeSelecionada(evt) {
    console.log(evt.nomeAtributo, evt.valor);
  }
}
