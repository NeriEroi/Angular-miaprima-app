import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Primo component';
  secondTitle: string = '';
  
  constructor() {
    setTimeout(()=> {
      this.secondTitle = 'Primo Sottotitolo';
    }, 2000);
  }

}
