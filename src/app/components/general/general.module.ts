import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GeneralRoutingModule } from './general-routing.module';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ItvisComponent } from './pages/itvis/itvis.component';
import { ToyotaComponent } from './pages/toyota/toyota.component';



@NgModule({
  declarations: [
    ServiciosComponent,
    ItvisComponent,
    ToyotaComponent
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    ReactiveFormsModule
  ]
})
export class GeneralModule { }
