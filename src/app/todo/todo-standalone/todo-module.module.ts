import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShadowDirective } from '../shadow.directive';

@NgModule({
  declarations: [TodoListComponent, TodoItemComponent],
  imports: [CommonModule, ReactiveFormsModule, ShadowDirective],
})
export class TodoModuleModule2 {}
