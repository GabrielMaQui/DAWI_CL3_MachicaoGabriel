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
    costo: 0
  }

  mostrarMensaje = false;

  calcularCosto() {

    this.mostrarMensaje = true;
    if(this.planCelular.minutos <= 5){
      this.planCelular.costo = 10;
    }
    else{
      this.planCelular.costo = 10 + (this.planCelular.minutos - 5) * 2;
    }
  }

}
