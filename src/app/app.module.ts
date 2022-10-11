import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ProductoComponent } from './components/producto/producto.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { WhatsappComponent } from './components/whatsapp/whatsapp.component';
import { EndesarrolloComponent } from './components/endesarrollo/endesarrollo.component';
import { NuestrosLatidosComponent } from './secciones/nuestros-latidos/nuestros-latidos.component';
import { ContactenosComponent } from './secciones/contactenos/contactenos.component';
import { ResponsabilidadSocialComponent } from './secciones/responsabilidad-social/responsabilidad-social.component';
import { ProductosComponent } from './secciones/productos/productos.component';
import { NavLeftComponent } from './components/nav-left/nav-left.component';
import { NavLeftProductsComponent } from './components/nav-left-products/nav-left-products.component';
import { NavLeftBindiComponent } from './components/nav-left-bindi/nav-left-bindi.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    ContactoComponent,
    CategoriasComponent,
    ProductoComponent,
    TarjetaComponent,
    WhatsappComponent,
    EndesarrolloComponent,
    NuestrosLatidosComponent,
    ContactenosComponent,
    ResponsabilidadSocialComponent,
    ProductosComponent,
    NavLeftComponent,
    NavLeftProductsComponent,
    NavLeftBindiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
