import { Component } from '@angular/core';
import { taskInterface } from './task_module';
import {NewTaskPageComponent} from './new-task-page/new-task-page.component'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'todoappPiton';
}
export class task implements taskInterface {
  task:string;
  date:any;
  isDone:boolean;
  constructor(task:string,date:any,isDone:boolean){
    this.date = date;
    this.isDone = isDone;
    this.task = task;
  }
}
