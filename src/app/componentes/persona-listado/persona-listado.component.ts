import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Persona } from 'src/app/clases/persona';

@Component({
  selector: 'app-persona-listado',
  templateUrl: './persona-listado.component.html',
  styleUrls: ['./persona-listado.component.css']
})
export class PersonaListadoComponent implements OnInit {

  listaPer : Persona[] = [];
  unaPersonaListado: Persona;

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(persona:Persona) {
    this.unaPersonaListado = persona;
  }

  ngOnChanges(changes: SimpleChanges) {
    //if (changes.pelicula && changes.pelicula.currentValue.actores) {
      this.unaPersonaListado = undefined;
      //this.actores = changes.pelicula.currentValue.actores;
      this.listaPer = changes.persona.currentValue.listaPer;
    //}
  }


}
