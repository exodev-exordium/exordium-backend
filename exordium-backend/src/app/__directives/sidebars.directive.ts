import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import $ from 'jquery';

@Directive({
  selector: '[sidebarhandler]'
})
export class SidebarsDirective implements OnInit {

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    $(document).on('click', (event) => {
      const sidebar = $('#sidebar');
      const aside = $('#aside');
      const backdrop = $('.sidebar-backdrop');

      if (sidebar.hasClass('sidebar-show')) {
        if (!$(event.target).closest('#sidebar').length && !$(event.target).closest('.sidebar-toggle').length) {
          sidebar.removeClass('sidebar-show');
          backdrop.removeClass('show');
          $('body').css('overflow', '');
        }
      }

      if (aside.hasClass('sidebar-show')) {
        if (!$(event.target).closest('#aside').length && !$(event.target).closest('.aside-toggle').length) {
          aside.removeClass('sidebar-show');
          backdrop.removeClass('show');
          $('body').css('overflow', '');
        }
      }
    });
  }

  @HostListener('click', ['$event']) onClick(event: any) {
    const backdrop = $('.sidebar-backdrop');

    if (this.elementRef.nativeElement.classList.contains('sidebar-toggle')) {
      const sidebar = $('#sidebar');

      if (sidebar.hasClass('sidebar-show')) {
        sidebar.removeClass('sidebar-show');
        backdrop.removeClass('show');
        $('body').css('overflow', '');
      } else {
        sidebar.addClass('sidebar-show');
        backdrop.addClass('show');
        $('body').css('overflow', 'hidden');
      }
    }

    if (this.elementRef.nativeElement.classList.contains('aside-toggle')) {
      const aside = $('#aside');

      if (aside.hasClass('sidebar-show')) {
        aside.removeClass('sidebar-show');
        backdrop.removeClass('show');
        $('body').css('overflow', '');
      } else {
        aside.addClass('sidebar-show');
        backdrop.addClass('show');
        $('body').css('overflow', 'hidden');
      }
    }

    event.preventDefault();
  }

}
