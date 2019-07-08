import {Component, OnInit} from '@angular/core';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit{
  constructor(private dataService: DataService){}
  allTodo: any[] = [];
  value = '';
  title = 'ToDo';
  inputString: any = {};
  ngOnInit() {
    this.allTodo = this.dataService.getData();
  }
  getInput(inputString) {
    function InputElement(value) {
      this.value = value;
      this.done = false;
      this.redact = true;
    }
    this.inputString = new InputElement(inputString);
  }
  addElementToList() {
    this.allTodo.push(this.inputString);
    this.dataService.updateData(this.allTodo);
    this.inputString = '';
  }
}
