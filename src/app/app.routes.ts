import { Routes } from '@angular/router';
import { SignalComponent } from './signals/signal/signal.component';
import { TodoListComponent } from './todo/todo-standalone/todo-list/todo-list.component';
import { inject } from '@angular/core';
import { TodoService } from './todo/todo.service';

export const routes: Routes = [
  { path: 'signal', component: SignalComponent },
  {
    path: 'img',
    loadComponent: () =>
      import('./img/img.component').then((c) => c.ImgComponent),
    title: 'Img',
  },
  {
    path: 'todoModule',
    loadChildren: () =>
      import('./todo/todo-module/todo-module.module').then(
        (m) => m.TodoModuleModule,
      ),
  },
  {
    path: 'todoStandalone',
    component: TodoListComponent,
    title: 'Todo list standalone',
    resolve: {
      items: () => inject(TodoService).items$,
    },
    canActivate: [() => inject(TodoService).hasAccess$],
    canDeactivate: [
      (component: TodoListComponent) =>
        component.hasChanges ? confirm('Do you really want to leave?') : true,
    ],
  },
];
