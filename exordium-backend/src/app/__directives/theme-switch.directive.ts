import { Directive, HostListener } from '@angular/core';
import $ from 'jquery';

@Directive({
  selector: '[themeSwitch]'
})
export class ThemeSwitchDirective {

  constructor() { }

  @HostListener('click', ['$event']) onClick(event: any) {
    const mainApp = $('.app');

    if (mainApp.hasClass('light-theme')) {
      mainApp.removeClass('light-theme');
      mainApp.addClass('dark-theme');
    } else {
      mainApp.removeClass('dark-theme');
      mainApp.addClass('light-theme');
    }

    event.preventDefault();
  }

}
