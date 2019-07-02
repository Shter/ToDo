import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-field-to-push',
  templateUrl: './field-to-push.component.html',
  styleUrls: ['./field-to-push.component.css']
})
export class FieldToPushComponent {
  @Input() allTodo: string[];
  deleteElem(n) {
    console.log(this.allTodo);
     this.allTodo.splice(n,1);
  }
}
