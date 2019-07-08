import {Component, Input} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-element-of-input',
  templateUrl: './element-of-input.component.html',
  styleUrls: ['./element-of-input.component.css'],
  providers: [DataService]
  })

export class ElementOfInputComponent {
  constructor(private dataService: DataService) {}
  @Input() allTodo: any[];
  @Input() n: number;
  @Input() elem: object;
  deleteElem(n) {
    this.allTodo.splice(n,1);
    this.dataService.updateData(this.allTodo);
  }
  redact(n) {
    this.allTodo[n].redact = !this.allTodo[n].redact;
    this.dataService.updateData(this.allTodo);
  }
  changeCheck(n) {
    this.allTodo[n].done = !this.allTodo[n].done;
    this.dataService.updateData(this.allTodo);
  }
}
