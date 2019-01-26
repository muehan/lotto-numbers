import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(){
    this.refresNumbers();
  }

  public number1: number = 0;
  public number2: number = 0;
  public number3: number = 0;
  public number4: number = 0;
  public number5: number = 0;
  public number6: number = 0;

  public additionalNumber: number = 0;
  
  public refresNumbers() : void {
    this.number1 = this.generateNumberBetweenOneAnd(42);
    this.number2 = this.generateNumberBetweenOneAnd(42);
    this.number3 = this.generateNumberBetweenOneAnd(42);
    this.number4 = this.generateNumberBetweenOneAnd(42);
    this.number5 = this.generateNumberBetweenOneAnd(42);
    this.number6 = this.generateNumberBetweenOneAnd(42);
    this.additionalNumber = this.generateNumberBetweenOneAnd(6);
  }

  private generateNumberBetweenOneAnd(max: number): number {
    return Math.floor(Math.random() * max) + 1;
  }
}
