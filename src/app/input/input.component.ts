  import {Component, EventEmitter, Input, Output} from '@angular/core';

  @Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']
  })
  export class InputComponent {
    @Input() inputString: string = '';
    @Output() textFromInput = new EventEmitter();

    pushToParent() {
      this.textFromInput.emit(this.inputString);
    }
  }
