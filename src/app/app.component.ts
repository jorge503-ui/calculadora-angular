import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Aplicacion de Calculadora';

  resultado:number=0;

  getResultado(resultado:number){
    this.resultado=resultado;
    //console.log("result padre " + this.resultado + " " + resultado)
  }
}
