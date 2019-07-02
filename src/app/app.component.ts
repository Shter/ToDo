import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo';
  allTodo: string[] = [];
  inputString: string;
  getInput(inputString) {
    this.inputString = (inputString);
  }
  addElementToList() {
    this.allTodo.push(this.inputString);
    console.log(this.allTodo)
  }

}
