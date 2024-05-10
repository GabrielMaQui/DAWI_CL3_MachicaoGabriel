import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-capicua',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './capicua.component.html',
  styleUrl: './capicua.component.scss'
})
export class CapicuaComponent {

  capicua = {
    numero: 0,
    resultado: '',
    error: 'Ingrese un número de dos cifras y positivo'
  };
  mostrarMensaje = false;
  mostrarError = false;

  verificarCapicua() {
    if (this.capicua.numero > 9 && this.capicua.numero <= 99){
      this.mostrarMensaje = true;
      this.mostrarError = false;
      let numeroString = this.capicua.numero.toString();
      let numeroInvertido = numeroString.split('').reverse().join('');
      if(numeroString === numeroInvertido){
        this.capicua.resultado = "El número " + this.capicua.numero + " es capicúa";
      }
      else{
        this.capicua.resultado = "El número " + this.capicua.numero + " no es capicúa";
      }
    }
    else{
      this.mostrarMensaje = false;
      this.mostrarError = true;
    }
  }

}
