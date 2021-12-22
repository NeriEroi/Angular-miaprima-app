import { Component } from '@angular/core';

@Component({
  selector: 'app-secondo-comp',
  templateUrl: './secondo-component.component.html',
  styleUrls: ['./secondo-component.component.css']
})
export class SecondoComponent {

  parola: string = '';

  showParola() {
    this.parola = 'Secondo Sottotitolo';
  }
}