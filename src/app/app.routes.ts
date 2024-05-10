import { Routes } from '@angular/router';
import { TelefonoMinutosComponent } from './ejercicios/telefono-minutos/telefono-minutos.component';
import { EdadesComponent } from './ejercicios/edades/edades.component';
import { CapicuaComponent } from './ejercicios/capicua/capicua.component';
import { AsciiTableComponent } from './ejercicios/ascii-table/ascii-table.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  {path: 'telefono', component: TelefonoMinutosComponent},
  {path: 'edades', component: EdadesComponent},
  {path: 'capicua', component: CapicuaComponent},
  {path: 'tabla-ascii', component: AsciiTableComponent},
];

