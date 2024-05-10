import { Component } from '@angular/core';

@Component({
  selector: 'app-ascii-table',
  standalone: true,
  imports: [],
  templateUrl: './ascii-table.component.html',
  styleUrl: './ascii-table.component.scss'
})
export class AsciiTableComponent {
  asciiChars: any[] = [];

  constructor() {
    this.generateAsciiTable();
  }

  generateAsciiTable() {
    for (let i = 32; i < 165; i++) {
      if (i < 97 || i > 122) {
        this.asciiChars.push({ code: i, character: String.fromCharCode(i) });
      }
    }
  }
}
