import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  allTodo: any[] = [];
  value = '';
  title = 'ToDo';
  inputString: any = {};
  ngOnInit(): void {
    if(localStorage.getItem('myToDo')) {
      this.allTodo = JSON.parse(localStorage.getItem("myToDo"));
      /*console.log(this.allTodo)*/
    }
  }
  getInput(inputString) {
    function InputElement(value) {
      this.value = value;
      this.done = false;
    }
    this.inputString = new InputElement(inputString);
  }
  addElementToList() {
    console.log(this.allTodo);
    this.allTodo.push(this.inputString);
    let temp = JSON.stringify(this.allTodo);
    localStorage.setItem("myToDo", temp);
    this.inputString = '';
  }
}
