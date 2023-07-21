import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskItem } from '../models/task-item';

@Component({
  selector: 'task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit {

  constructor() { }

  @Input()
  tasks: TaskItem[] = []

  @Output()
  onRemove = new EventEmitter<TaskItem>()

  ngOnInit(): void {
  }

  remove(taskItem: TaskItem){
    this.onRemove.next(taskItem);
  }

}