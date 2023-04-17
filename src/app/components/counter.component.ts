import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  @Input()
  counter = 0

  //Create an output to let user know if the value has changed
  //All output are an event
  @Output()
  onValueChanged = new Subject<number>()

  dec() {
    this.count(-1)
  }

  inc() {
    this.count(1)
  }

  count(delta: number) {
    this.counter += delta
    // notify our subscribers
    this.onValueChanged.next(this.counter)
  }

}
