import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-telefono-minutos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './telefono-minutos.component.html',
  styleUrl: './telefono-minutos.component.scss'
})


export class TelefonoMinutosComponent {

  planCelular = {
    numero: 0,
    minutos: 0,
    costo: 0,
    error: 'Los minutos deben ser enteros y positivos'
  }

  mostrarMensaje = false;
  mostrarError = false;

  calcularCosto() {

    if(this.planCelular.minutos > 0 && Number.isInteger(this.planCelular.minutos)){
        this.mostrarMensaje = true;
        this.mostrarError = false;
        if(this.planCelular.minutos <= 5){
          this.planCelular.costo = 10;
        }
        else{
          this.planCelular.costo = 10 + (this.planCelular.minutos - 5) * 2;
        }
      }else{
        this.mostrarMensaje = false;
        this.mostrarError = true;
      }
  }

}
