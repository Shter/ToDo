import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-field-to-push',
  templateUrl: './field-to-push.component.html',
  styleUrls: ['./field-to-push.component.css']
})
export class FieldToPushComponent {
  @Input() allTodo: any[];
  deleteElem(n) {
    this.allTodo.splice(n,1);
    let temp = JSON.stringify(this.allTodo);
    localStorage.setItem("myToDo", temp);
  }
  redact(){

  }
  changeCheck(n) {
    this.allTodo[n].done = !this.allTodo[n].done;
    console.log(n);
  }
}
