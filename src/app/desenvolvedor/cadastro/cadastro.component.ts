import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Desenvolvedor} from "../entity/desenvolvedor.entity";
import {DesenvolvedorService} from "../../integracao/desenvolvedor.service";
import {DesenvolvedorVo} from "../../integracao/pojos/desenvolvedor-vo";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  value: Desenvolvedor;


  constructor(private desenvolvedorService: DesenvolvedorService) {
    this.value = new Desenvolvedor();
  }

  ngOnInit() {
  }


  submete(form: NgForm) {
    if (form.valid) {
      console.log(this.value);
      const desenvolvedorVo: DesenvolvedorVo = {
        nome: this.value.nome,
        especialidades: this.value.especialidades,
        cargo: this.value.cargo,
        dataAdmissao: this.value.dataAdmissao.toISOString(),
        sexo: this.value.sexo
      };
      this.desenvolvedorService.cadastra(desenvolvedorVo).subscribe();
      form.resetForm();
    }

  }

}
