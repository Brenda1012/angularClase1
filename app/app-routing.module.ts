import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EncabezadoComponent} from '../app/nucleo/capa/encabezado/encabezado.component';
import {MainComponent} from '../app/nucleo/capa/main/main.component';
import {PiepaginaComponent} from '../app/nucleo/capa/piepagina/piepagina.component';
import {CreacionPersonaComponent} from '../app/nucleo/capa/main/creacion-persona/creacion-persona.component';

const routes: Routes = [
{path: 'encabezado', component: EncabezadoComponent},
{path: 'main', component: MainComponent},
{path: 'piepagina', component: PiepaginaComponent},
{path: 'creacionpersona', component: CreacionPersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
