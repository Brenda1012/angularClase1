import { Component, OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-creacion-persona',
  templateUrl: './creacion-persona.component.html',
  styleUrls: ['./creacion-persona.component.css']
})
export class CreacionPersonaComponent implements OnInit {
   
  public titleCreacionPersona='Creación Persona';
  
  public id:int;
  public tipoIdentificacion:int;
  public identificacion:String;
  public primerNombre:String;
  public primerApellido:String;

  constructor() { }

  ngOnInit() {
  
  }


}
