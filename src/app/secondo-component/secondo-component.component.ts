import { Component } from '@angular/core';

@Component({
  selector: 'app-secondo-comp',
  templateUrl: './secondo-component.component.html',
  styleUrls: ['./secondo-component.component.css']
})
export class SecondoComponent {
  showMe:boolean=false;
  parola: string = '';

  toggleParola() {
    this.parola = 'Secondo Sottotitolo';
    this.showMe = !this.showMe;
  }
}