import {ChangeDetectionStrategy, Component, computed, inject, Signal, signal} from '@angular/core';
import { Todo } from '../../todo.service';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShadowDirective } from '../../shadow.directive';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {LargeContentComponent} from "../large-content/large-content.component";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TodoItemComponent,
    ShadowDirective,
    AsyncPipe,
    FormsModule,
    LargeContentComponent
  ],
})
export class TodoListComponent {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly items: Todo[] = this.activatedRoute.snapshot.data['items'];

  readonly searchControl = signal<string>('');

  readonly filteredItems = computed(() => this.filterItems(this.searchControl(), this.items));

  private filterItems(searchText: string, items: Todo[]): Todo[] {
    return searchText
      ? items.filter((item) =>
          item.title.toLowerCase().includes(searchText.toLowerCase()),
        )
      : items;
  }
}
