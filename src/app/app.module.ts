import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DesenvolvedorModule} from './desenvolvedor/desenvolvedor.module';
import {IntegracaoModule} from "./integracao/integracao.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IntegracaoModule,
    DesenvolvedorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
