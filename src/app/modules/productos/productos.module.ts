import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { NuestrosproductosComponent } from './nuestrosproductos/nuestrosproductos.component';
import { MarcasComponent } from './marcas/marcas.component';


@NgModule({
  declarations: [
    NuestrosproductosComponent,
    MarcasComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
