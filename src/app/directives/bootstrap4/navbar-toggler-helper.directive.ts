import { Directive, Renderer2, HostListener, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBs4NavbarToggleHelper]'
})
export class Bs4NavbarToggleHelperDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('click') toggleShow(eventData: Event) {
    const parent = this.elementRef.nativeElement as HTMLElement;
    parent.classList.add('collapsed');
    const child = parent.parentElement.getElementsByClassName('navbar-collapse');

    if (child && child.length) {
      child[0].classList.toggle('show');
    }
  }
}
