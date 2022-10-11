import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItvisComponent } from './pages/itvis/itvis.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ToyotaComponent } from './pages/toyota/toyota.component';

const routes: Routes = [
{
  path:'',
  component: ServiciosComponent,
  children:[ 
    {path:'itvis',component:ItvisComponent},
    {path:'toyota',component:ToyotaComponent},
    {path:'**',component:ItvisComponent}
  ]
}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
