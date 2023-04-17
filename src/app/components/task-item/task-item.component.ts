import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task: Task = {
    id: undefined,
    text: '',
    day: '',
    reminder: false,
  };
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }
}
