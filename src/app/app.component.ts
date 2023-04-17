import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'day-31';
  value = 10;
  historicalValue: number[] = []

  valueChanged (v :number) {
    //To print out in console that the value has changed
    console.info('>>> Value Changed' , v)
    //to update {{ value }} of the change
    this.value = v
    this.historicalValue.push(v)
  }

  deleteValue(i: number) {
    this.historicalValue.splice(i, 1)
  }
}
