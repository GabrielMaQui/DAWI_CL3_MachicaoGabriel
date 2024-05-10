import { Component } from '@angular/core';

@Component({
  selector: 'app-ascii-table',
  standalone: true,
  imports: [],
  templateUrl: './ascii-table.component.html',
  styleUrl: './ascii-table.component.scss'
})
export class AsciiTableComponent {

  simbolos: string[] = [
    "Ç", "ü", "é", "â", "ä", "à", "å", "ç", "ê", "ë", "è", "ï", "î", "ì", "Ä", "Å", "É", "æ", "Æ", "ô",
    "ö", "ò", "û", "ù", "ÿ", "Ö", "Ü", "¢", "£", "¥", "₧", "ƒ", "á", "í", "ó", "ú", "ñ", "Ñ", "ª", "º",
    "¿", "⌐", "¬", "½", "¼", "¡", "«", "»"
  ];

  asciiCaracteresSolicitados: any[]  = [];

  constructor() {
    this.generateAsciiTable();
  }

  generateAsciiTable() {
    for (let i = 32; i < 128; i++) {
      if(i < 97 ||  i > 122 )
      this.asciiCaracteresSolicitados.push({ code: i, caracter: String.fromCharCode(i)});
    }
    for (let i = 0; i < 39  ; i++) {

      this.asciiCaracteresSolicitados.push({ code: 128 + i, caracter: this.simbolos[i]});
    }
  }
}
