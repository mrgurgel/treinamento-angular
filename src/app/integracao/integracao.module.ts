import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {DesenvolvedorService} from "./desenvolvedor.service";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    DesenvolvedorService
  ]
})
export class IntegracaoModule { }
