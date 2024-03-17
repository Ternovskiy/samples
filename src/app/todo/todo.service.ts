import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  readonly items$ = of<Todo[]>([
    {
      id: 1,
      title: 'Learn HTML',
      status: Status.Completed,
    },
    {
      id: 2,
      title: 'Learn CSS',
      status: Status.Completed,
    },
    {
      id: 3,
      title: 'Learn JavaScript',
      status: Status.Completed,
    },
    {
      id: 4,
      title: 'Learn TypeScript',
      status: Status.Completed,
    },
    {
      id: 5,
      title: 'Learn Angular',
      status: Status.Active,
    },
    {
      id: 6,
      title: 'Learn RxJS',
      status: Status.New,
    },
    {
      id: 7,
      title: 'Learn ',
      status: Status.New,
    },
  ]);
}

export interface Todo {
  id: number;
  status: Status;
  title: string;
}

export enum Status {
  New = 'new',
  Active = 'active',
  Completed = 'completed',
}
