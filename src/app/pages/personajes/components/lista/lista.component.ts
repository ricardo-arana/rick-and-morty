import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../providers/personajes.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  personaje: string[] = [];
  constructor(private personajeService: PersonajesService) { }

  ngOnInit(): void {
    this.personajeService.getPersonajes()
    .subscribe((obj: any) => 
      {
        console.log(obj);
        const listaPersonaje: any[] = obj.results;
        this.personaje = listaPersonaje.map(
          (personaje) => personaje.name
        );
      });
  }

}
