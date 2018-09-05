import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadosDesenvolvedorComponent } from './dados-desenvolvedor/dados-desenvolvedor.component';
import { ListaDesenvolvedoresComponent } from './lista-desenvolvedores/lista-desenvolvedores.component';
import { SexoPipe } from './pipes/sexo.pipe';
import { FormDesenvolvedorComponent } from './form-desenvolvedor/form-desenvolvedor.component';
import {FormsModule} from '@angular/forms';
import {PaletaModule} from '../paleta/paleta.module';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PaletaModule
  ],
  declarations: [
    DadosDesenvolvedorComponent,
    ListaDesenvolvedoresComponent,
    SexoPipe,
    FormDesenvolvedorComponent
  ],
  exports: [
    DadosDesenvolvedorComponent,
    ListaDesenvolvedoresComponent,
    FormDesenvolvedorComponent
  ]
})
export class DesenvolvedorModule { }
