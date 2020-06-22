import { Directive, ElementRef, HostListener } from '@angular/core';
import $ from 'jquery';

@Directive({
  selector: '[appSidebars]'
})
export class SidebarsDirective {

  constructor(
    private elementRef: ElementRef
  ) { }

  @HostListener('click', ['$event']) onClick(event: any) {

    event.preventDefault();
  }

}
