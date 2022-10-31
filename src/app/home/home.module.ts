import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { HomebindiComponent } from '../components/homebindi/homebindi.component';



@NgModule({
  declarations: [
    InicioComponent,
    HomebindiComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InicioComponent,
    HomebindiComponent
  ]
})
export class HomeModule { }
