import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ShadowDirective } from '../shadow.directive';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
  },
];

@NgModule({
  declarations: [TodoListComponent, TodoItemComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    ShadowDirective,
  ],
})
export class TodoModuleModule {}
