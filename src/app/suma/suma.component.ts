import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent{

  operandoA:number=0;
  operandoB:number=0;
  resultado:number=0;

  sumar():void{
    this.resultado = this.operandoA+this.operandoB;
  }

}
