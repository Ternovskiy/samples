import { Component, Input } from '@angular/core';
import { Status, Todo } from '../../todo.service';
import { NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrl: './todo-item.component.scss',
    standalone: true,
    imports: [NgSwitch, NgSwitchCase],
})
export class TodoItemComponent {
  protected readonly Status = Status;

  @Input({ required: true }) item!: Todo;
}
