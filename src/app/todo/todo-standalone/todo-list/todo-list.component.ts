import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Todo, TodoService } from '../../todo.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { map, startWith, switchMap } from 'rxjs';
import { ShadowDirective } from '../../shadow.directive';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrl: './todo-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        ReactiveFormsModule,
        NgFor,
        TodoItemComponent,
        ShadowDirective,
        AsyncPipe,
    ],
})
export class TodoListComponent {
  private readonly todoService = inject(TodoService);

  private readonly items$ = this.todoService.items$;

  readonly searchControl = new FormControl<string>('', { nonNullable: true });

  readonly filteredItems$ = this.items$.pipe(
    switchMap((items) => this.filteredItems(items)),
  );

  private filteredItems(items: Todo[]) {
    return this.searchControl.valueChanges.pipe(
      startWith(this.searchControl.value),
      map((searchText) => this.filterItems(searchText, items)),
    );
  }

  private filterItems(searchText: string, items: Todo[]) {
    return searchText
      ? items.filter((item) =>
          item.title.toLowerCase().includes(searchText.toLowerCase()),
        )
      : items;
  }
}
