import { Component } from '@angular/core';

@Component({
  selector: 'app-terzo-comp',
  templateUrl: './terzo-component.component.html',
  styleUrls: ['./terzo-component.component.css']
})
export class TerzoComponent {
 nome = '';
 characters= [  
                'Stavrogin',
                'Kirillov',
                'Lebezjatnikov',
              ];
addNome() {
  this.characters.push(this.nome);
}
}