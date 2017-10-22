import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {TodoItem} from '../../model/todo';

@Component({
  selector: 'swda-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todoItem: TodoItem;
  @Output() onMarkAsDone = new EventEmitter<TodoItem>();

  markAsDone() {
    this.onMarkAsDone.emit(this.todoItem);
  }
}