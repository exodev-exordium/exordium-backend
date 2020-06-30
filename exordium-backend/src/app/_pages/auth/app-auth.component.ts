import { Component, OnInit, HostListener } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-app-auth',
  templateUrl: './app-auth.component.html',
  styleUrls: ['./app-auth.component.scss']
})
export class AppAuthComponent implements OnInit {
  windowScrolled: boolean;

  constructor() { }

  ngOnInit(): void {

  }

  @HostListener('window:scroll', [])
  onScroll() {
    if (window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;

      if (!$('nav.navbar').hasClass('scrolled')) {
        $('nav.navbar').addClass('position-fixed scrolled');
      }

      if (!$('.nav-dashboard-wrapper').hasClass('scrolled')) {
        $('.nav-dashboard-wrapper').addClass('position-fixed scrolled');
      }

    } else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = true;

      if ($('nav.navbar').hasClass('scrolled')) {
        $('nav.navbar').removeClass('position-fixed scrolled');
      }

      if ($('.nav-dashboard-wrapper').hasClass('scrolled')) {
        $('.nav-dashboard-wrapper').removeClass('position-fixed scrolled');
      }
    }
  }

}
