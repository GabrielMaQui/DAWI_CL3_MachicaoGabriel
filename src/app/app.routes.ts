import { Routes } from '@angular/router';
import { TelefonoMinutosComponent } from './ejercicios/telefono-minutos/telefono-minutos.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'telefono', component: TelefonoMinutosComponent},
];
