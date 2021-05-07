import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/clases/persona';

@Component({
  selector: 'app-persona-detalle',
  templateUrl: './persona-detalle.component.html',
  styleUrls: ['./persona-detalle.component.css']
})
export class PersonaDetalleComponent implements OnInit {

  @Input() perDetalle: Persona;

  constructor() { }

  ngOnInit(): void {
   // this.perDetalle = new Persona("55", "Juan", 33, "www.foto.com");
  }

}
