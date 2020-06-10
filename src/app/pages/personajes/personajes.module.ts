import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajesComponent } from './personajes.component';
import { ListaComponent } from './components/lista/lista.component';
import { PersonajesRoutingModule } from './personajes.routing';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [PersonajesComponent, ListaComponent],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
    HttpClientModule
  ]
})
export class PersonajesModule { }
