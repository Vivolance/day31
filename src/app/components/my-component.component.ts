import { Component, Input } from '@angular/core';

@Component({
  //selector picks up the style, structure and behaviour and put it into a button on the html page
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {

  //Becomes part of the attribute of mycomponent
  @Input()
  title = "Dancing Bear"
  @Input()
  imageUrl = "/assets/polarbear.gif"

}
