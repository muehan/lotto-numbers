import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public generateNumberBetweenOneAnd(max: number): number {
    return Math.floor(Math.random() * max) + 1;
  }
}
