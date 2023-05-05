import { Component } from "@angular/core";


@Component({
    selector: 'app-counter',
    template: `
    <span>Counter: {{numero}}</span>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="decreaseBy(-1)">-1</button>
    `
})
export class CounterComponent{
    title: string = 'Contador App';
  numero: number = 10;

  public increaseBy(value: number):void{
    this.numero += value;
  }

  public decreaseBy(value: number):void{
    this.numero += value;
  }

  public reset():void{
    this.numero = 10;
  }
}