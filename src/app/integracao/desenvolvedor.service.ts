import { Injectable } from '@angular/core';
import {Desenvolvedor} from "../desenvolvedor/entity/desenvolvedor.entity";
import {HttpClient} from "@angular/common/http";
import {DesenvolvedorVo} from "./pojos/desenvolvedor-vo";

import {map} from "rxjs/operators";

@Injectable()
export class DesenvolvedorService {

  constructor(
    private httpClient: HttpClient
  ) { }

  /*
  buscaDesenvolvedores() {
    return Observable.create(observer => {

      this.httpClient.get('http://172.25.0.116:8080/api/desenvolvedor')
        .subscribe((desenvs: Array<DesenvolvedorVo>) => {

          let desenvolvedores: Array<Desenvolvedor> = [];

          for (let desenv of desenvs) {
            desenvolvedores.push(
              new Desenvolvedor(
                desenv.nome,
                desenv.cargo,
                desenv.especialidades,
                new Date(desenv.dataAdmissao),
                desenv.sexo
              )
            );
          }

          observer.next(desenvolvedores);

        });

    });

  }
  */

  buscaDesenvolvedores() {
    return this.httpClient.get('http://172.25.0.116:8080/api/desenvolvedor')
      .pipe(map((desenvs: Array<DesenvolvedorVo>) => {

        return desenvs.map(desenv => new Desenvolvedor(
          desenv.nome,
          desenv.cargo,
          desenv.especialidades,
          new Date(desenv.dataAdmissao),
          desenv.sexo
        ));

      }));
  }

}
