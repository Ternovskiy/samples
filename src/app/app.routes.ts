import { Routes } from '@angular/router';
import { SignalComponent } from './signals/signal/signal.component';
import { TodoListComponent } from './todo/todo-module/todo-list/todo-list.component';

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
  },
];
