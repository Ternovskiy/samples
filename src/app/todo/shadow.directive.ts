import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appShadow]',
  standalone: true,
})
export class ShadowDirective {
  constructor() {}

  @HostBinding('class.shadow')
  showShadow = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.showShadow = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.showShadow = false;
  }
}
