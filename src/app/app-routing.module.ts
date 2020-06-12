import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineaComponent } from './components/linea/linea.component';
import { BarraComponent } from './components/barra/barra.component';
import { DonaComponent } from './components/dona/dona.component';
import { RadarComponent } from './components/radar/radar.component';


const routes: Routes = [
  {
    path:'lineas', component:LineaComponent
  },
  {
    path:'barras',component:BarraComponent
  },
  {
    path:'dona',component:DonaComponent
  },
  {
    path:'radar',component:RadarComponent
  },
  {
    path:'**', pathMatch:'full', redirectTo:'lineas'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
