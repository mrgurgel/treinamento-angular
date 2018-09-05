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

  cadastra(desenvolvedor:Desenvolvedor) {
    const desenvolvedorVo: DesenvolvedorVo = {
      nome: desenvolvedor.nome,
      especialidades: desenvolvedor.especialidades,
      cargo: desenvolvedor.cargo,
      dataAdmissao: desenvolvedor.dataAdmissao.toISOString(),
      sexo: desenvolvedor.sexo
    };

    console.log("Enviando cadastro do desenvolvedor");
    console.log(desenvolvedor);
    console.log(this.httpClient);

    return this.httpClient.post('http://172.25.0.116:8080/api/desenvolvedor', desenvolvedorVo);
  }

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
