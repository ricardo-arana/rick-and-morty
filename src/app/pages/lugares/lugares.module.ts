import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LugaresComponent } from './lugares.component';
import { ListaComponent } from './components/lista/lista.component';
import { LugaresRoutingModule } from './lugares.routing';



@NgModule({
  declarations: [LugaresComponent, ListaComponent],
  imports: [
    CommonModule,
    LugaresRoutingModule
  ]
})
export class LugaresModule { }
