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
    diferencia: 0,
    error: 'Rango de numeros equivocado, ingrese un numero entre 0 y 120 y que sea entero'
  }

  mostrarMensaje = false;
  mostrarError = false;

  calcularDiferencia() {

    if(this.edades.edad1 < 0 || this.edades.edad2 < 0 || this.edades.edad1 > 120 || this.edades.edad2 > 120
        || Number.isInteger(this.edades.edad1) || Number.isInteger(this.edades.edad2)){

        this.mostrarMensaje = true;
        this.mostrarError = false;
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

  }else {

    this.mostrarMensaje = false;
    this.mostrarError = true;


  }

  }

}
