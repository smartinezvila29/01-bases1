import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})


export class HeroeComponent {
  public name:string = 'Iron man';
  public age: number = 45;

  public volar():string{
    return 'volar';
  }

  public disparar():string{
    return 'piu piu';
  }

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  changeName( value:string ):void{
    this.name = value;
  }

  changeAge( value:number):void{
    this.age = value;
  }

}
