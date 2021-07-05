import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-task-page',
  templateUrl: './new-task-page.component.html',
  styleUrls: ['./new-task-page.component.sass']
})
export class NewTaskPageComponent implements OnInit {
  
  constructor(){

  }

  ngOnInit(): void {
  }
  onClick(task:string,date:string): void{
    let newTask = new ToDoTask(task,date);
    
  }

}
export class ToDoTask{
  task: string;
  date: string;
  constructor(task:string,date:string){
    this.task = task;
    this.date = date;
  }

}
