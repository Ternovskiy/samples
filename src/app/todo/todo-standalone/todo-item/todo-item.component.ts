import { Component, Input } from '@angular/core';
import { Status, Todo } from '../../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  protected readonly Status = Status;

  @Input({ required: true }) item!: Todo;
}
