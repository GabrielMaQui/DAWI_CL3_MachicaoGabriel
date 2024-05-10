import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edades',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edades.component.html',
  styleUrl: './edades.component.scss'
})
export class EdadesComponent {

  edades = {
    edad1: 0,
    edad2: 0,
    edadMayor: '',
    diferencia: 0
  }

  mostrarMensaje = false;

  calcularDiferencia() {
    this.edades.edad1 = Math.round(this.edades.edad1);
    this.edades.edad2 = Math.round(this.edades.edad2);
    this.mostrarMensaje = true;
    if(this.edades.edad1 > this.edades.edad2){
      this.edades.edadMayor = "La edad del mayor es: " + this.edades.edad1 + " años";
      this.edades.diferencia = this.edades.edad1 - this.edades.edad2;
    }

    else if(this.edades.edad1 < this.edades.edad2){
      this.edades.edadMayor = "La edad del mayor es: " + this.edades.edad2 + " años";
      this.edades.diferencia = this.edades.edad2 - this.edades.edad1;
    }
    else{
      this.edades.edadMayor = "No hay ninguna edad mayor, las edades son iguales";
      this.edades.diferencia = 0;
    }

  }

}
