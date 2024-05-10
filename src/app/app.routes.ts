import { Routes } from '@angular/router';
import { TelefonoMinutosComponent } from './ejercicios/telefono-minutos/telefono-minutos.component';
import { EdadesComponent } from './ejercicios/edades/edades.component';
import { CapicuaComponent } from './ejercicios/capicua/capicua.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'telefono', component: TelefonoMinutosComponent},
  {path: 'edades', component: EdadesComponent},
  {path: 'capicua', component: CapicuaComponent}
];
