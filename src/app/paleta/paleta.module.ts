import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaValoresComponent } from './lista-valores/lista-valores.component';
import {FormsModule} from '@angular/forms';
import { SelectDataComponent } from './select-data/select-data.component';
import { SelectSexoComponent } from './select-sexo/select-sexo.component';
import {MinLengthArrayDirective} from './validacao/min-length-array.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ListaValoresComponent, SelectDataComponent, SelectSexoComponent, MinLengthArrayDirective],
  exports: [ListaValoresComponent, SelectDataComponent, SelectSexoComponent, MinLengthArrayDirective]
})
export class PaletaModule { }
