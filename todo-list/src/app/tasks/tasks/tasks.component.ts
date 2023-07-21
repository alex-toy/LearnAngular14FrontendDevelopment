import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewTask } from 'src/app/models/new-task';
import { TaskService } from '../task.service';
import { NgForm } from '@angular/forms';
import { TaskItem } from 'src/app/models/task-item';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  newTask: NewTask = new NewTask();

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) { }

  tasks = this.taskService.getAllTasks(this.route.snapshot.params['date']);

  ngOnInit(): void {
    var strDate = this.route.snapshot.params['date'];
    this.newTask = new NewTask(this.newTask.title, new Date(strDate));
  }

  add(taskNgForm: NgForm){
    if(taskNgForm.touched == false) return;
    this.taskService.addTask(this.newTask.date,this.newTask);
    taskNgForm.reset({date: this.newTask.date});
  }

  remove(exisitingTask: TaskItem){
    var userConfirmed = confirm(`Are you sure that you want to remove the following task? \n "${exisitingTask.title}"`)
    if(userConfirmed){
      this.taskService.removeTask(this.newTask.date, exisitingTask);
    }
  }
}
