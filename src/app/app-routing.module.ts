import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importacion de componentes de secciones

import { ContactenosComponent } from './secciones/contactenos/contactenos.component';
import { InicioComponent } from './secciones/inicio/inicio.component';
import { NuestrosLatidosComponent } from './secciones/nuestros-latidos/nuestros-latidos.component';
import { ProductosComponent } from './secciones/productos/productos.component';
import { ResponsabilidadSocialComponent } from './secciones/responsabilidad-social/responsabilidad-social.component';
import { ProductosBindiComponent } from './secciones/productos-bindi/productos-bindi.component';
import { PoliticasDePrivacidadComponent } from './components/politicas-de-privacidad/politicas-de-privacidad.component';

const routes: Routes = [
  //redirige a la página de inicio cuando la ruta esta vacia
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },

  //estas son las rutas de cada sección
  { path: 'contactenos', component: ContactenosComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'nuestros-latidos', component: NuestrosLatidosComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'responsabilidad', component: ResponsabilidadSocialComponent },
  { path: 'productos-bindi', component: ProductosBindiComponent },
  { path: 'politicas', component: PoliticasDePrivacidadComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
