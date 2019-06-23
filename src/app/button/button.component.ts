import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button (click) = "addDoElem()">Add</button>`,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  addDoElem (value) {

  }

}
