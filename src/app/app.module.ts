import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DesenvolvedorModule} from './desenvolvedor/desenvolvedor.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DesenvolvedorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
