import { Directive, Renderer2, HostListener, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBootstrap4Dropdown]'
})
export class Boostrap4DropdownDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('click') toggleShow(eventData: Event) {
    const parent = this.elementRef.nativeElement as HTMLElement;
    parent.classList.add('show');
    const child = parent.getElementsByClassName('dropdown-menu');

    if (child && child.length) {
      child[0].classList.toggle('show');
    }
  }
}
