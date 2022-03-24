import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent{

  @Output() resultadoEmitter = new EventEmitter<number>();

  operandoA:number=0;
  operandoB:number=0;
  resultado:number=0;

  sumar():void{
    this.resultado = this.operandoA+this.operandoB;
    //console.log("sumando " + this.resultado);
    this.resultadoEmitter.emit(this.resultado);
  }

}
