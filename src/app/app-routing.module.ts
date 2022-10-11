import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'latidos', component: InicioComponent },
  { path: 'responsabilidad', component: InicioComponent },
  { path: 'contactenos', component: InicioComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
