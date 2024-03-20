import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Todo } from '../../todo.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { map, startWith } from 'rxjs';
import { ShadowDirective } from '../../shadow.directive';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AsyncPipe, NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

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
  private readonly activatedRoute = inject(ActivatedRoute);

  private readonly items: Todo[] = this.activatedRoute.snapshot.data['items'];

  readonly searchControl = new FormControl<string>('', { nonNullable: true });

  readonly filteredItems$ = this.filteredItems(this.items);

  get hasChanges() {
    return Boolean(this.searchControl.value);
  }

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
