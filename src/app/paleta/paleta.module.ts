import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaValoresComponent } from './lista-valores/lista-valores.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ListaValoresComponent],
  exports: [ListaValoresComponent]
})
export class PaletaModule { }
