import {Component, input, Input, model} from '@angular/core';
import { Status, Todo } from '../../todo.service';

import { ShadowDirective } from '../../shadow.directive';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
  standalone: true,
  imports: [],
  hostDirectives: [ShadowDirective],
})
export class TodoItemComponent {
  protected readonly Status = Status;

  readonly item = input.required<Todo>();
}
