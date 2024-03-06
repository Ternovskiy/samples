import {ChangeDetectionStrategy, Component, computed, effect, OnInit, signal, untracked} from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent implements OnInit {
  ngOnInit(): void {
  }

  count = signal(1);

  double = computed(() => this.count() * 2)


  click() {
    // this.count.set(1)
    this.count.update((value) => value + 1)
  }

  e = effect(() => {
    untracked(()=>{

      const c = this.count();
      console.log(c)
    })
    setTimeout(() => {
      // this.count.set(c + 4)
    })
  })

  constructor() {
  }
}
