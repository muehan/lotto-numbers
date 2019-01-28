import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    this.refresNumbers();
  }

  public number1: number = 0;
  public number2: number = 0;
  public number3: number = 0;
  public number4: number = 0;
  public number5: number = 0;
  public number6: number = 0;
  public additionalNumber: number = 0;

  public euroNumber1: number = 0;
  public euroNumber2: number = 0;
  public euroNumber3: number = 0;
  public euroNumber4: number = 0;
  public euroNumber5: number = 0;
  public additionalEuroNumber1: number = 0;
  public additionalEuroNumber2: number = 0;

  public refresNumbers(): void {
    this.number1 = this.generateNumberBetweenOneAnd(42);
    this.number2 = this.generateNumberBetweenOneAnd(42, [this.number1]);
    this.number3 = this.generateNumberBetweenOneAnd(42, [this.number1, this.number2]);
    this.number4 = this.generateNumberBetweenOneAnd(42, [this.number1, this.number2, this.number3]);
    this.number5 = this.generateNumberBetweenOneAnd(42, [this.number1, this.number2, this.number3, this.number4]);
    this.number6 = this.generateNumberBetweenOneAnd(42, [this.number1, this.number2, this.number3, this.number4, this.number5]);
    this.additionalNumber = this.generateNumberBetweenOneAnd(6);

    this.euroNumber1 = this.generateNumberBetweenOneAnd(50);
    this.euroNumber2 = this.generateNumberBetweenOneAnd(50, [this.euroNumber1]);
    this.euroNumber3 = this.generateNumberBetweenOneAnd(50, [this.euroNumber1, this.euroNumber2]);
    this.euroNumber4 = this.generateNumberBetweenOneAnd(50, [this.euroNumber1, this.euroNumber2, this.euroNumber3]);
    this.euroNumber5 = this.generateNumberBetweenOneAnd(50, [this.euroNumber1, this.euroNumber2, this.euroNumber3, this.euroNumber4]);
    this.additionalEuroNumber1 = this.generateNumberBetweenOneAnd(12);
    this.additionalEuroNumber2 = this.generateNumberBetweenOneAnd(12, [this.additionalEuroNumber1]);
  }

  private generateNumberBetweenOneAnd(max: number, butNot: number[] = null): number {
    let number = Math.floor(Math.random() * max) + 1;

    if (butNot != null) {
      while (butNot.indexOf(number) >= 0) {
        number = Math.floor(Math.random() * max) + 1;
      }
    }

    return number;
  }
}
