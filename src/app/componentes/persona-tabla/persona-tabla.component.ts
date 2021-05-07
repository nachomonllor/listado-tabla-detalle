import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Persona } from 'src/app/clases/persona';

@Component({
  selector: 'app-persona-tabla',
  templateUrl: './persona-tabla.component.html',
  styleUrls: ['./persona-tabla.component.css']
})
export class PersonaTablaComponent implements OnInit {

  @Input() listaPersonasTabla: Persona[] = [];
  
  @Output() personaSelected: EventEmitter<Persona> = new EventEmitter<Persona>();



  constructor() { }

  ngOnInit(): void {
    this.listaPersonasTabla.push(new Persona("1", "Jake", 25, "http://www.teenidols4you.com/blink/Actors/sean_faris/sean_faris_1299199990.jpg"));
    this.listaPersonasTabla.push(new Persona("2" , "Rian", 24, "https://2.bp.blogspot.com/-1P0b1Oj8tvw/UQMxB4wjtCI/AAAAAAAAAAk/7n-YqFuzVRo/s1600/Never-Back-Down-Screencaps-cam-gigandet-5187489-1024-576.jpg"));
    this.listaPersonasTabla.push(new Persona("3" , "Bon Jovi", 60, "https://upload.wikimedia.org/wikipedia/commons/7/7d/Jonbj2013.jpg"));
  }

  onSelect(persona) {
    this.personaSelected.emit(persona);
  }


}
