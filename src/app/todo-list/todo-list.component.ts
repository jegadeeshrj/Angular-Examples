import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  tasks = [
    { name: 'Learn Angular', completed: false },
    { name: 'Practice ngFor', completed: true },
    { name: 'Build To-Do App', completed: false }
  ];

  toggleTask(task: any) {
    task.completed = !task.completed;
  }
  // allTasksCompleted(): boolean {
  //   return this.tasks.every(task => task.completed);
  // }
  allTasksOpen(): boolean {
    return this.tasks.every(task => !task.completed);
  }
  notAllTasksOpen(): boolean {
    return this.tasks.some(task => task.completed);
  }
  openCount(): number {
    return this.tasks.filter(task => !task.completed).length;
  }
}