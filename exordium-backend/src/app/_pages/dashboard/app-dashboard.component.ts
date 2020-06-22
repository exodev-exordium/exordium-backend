import { Component, OnInit } from '@angular/core';

import $ from 'jquery';

@Component({
  selector: 'app-app-dashboard',
  templateUrl: './app-dashboard.component.html',
  styleUrls: ['./app-dashboard.component.scss']
})
export class AppDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // toggle the sidebar and aside
    this.toggleSides();
  }

  toggleSides() {
    const sidebar = $('#sidebar');
    const aside = $('#aside');
    const backdrop = $('.sidebar-backdrop');

    const toggleButtonSidebar = $('.sidebar-toggle');
    const toggleButtonAside = $('.aside-toggle');

    // sidebar toggle
    toggleButtonSidebar.click(() => {
      if (sidebar.hasClass('sidebar-show')) {
        sidebar.removeClass('sidebar-show');
        backdrop.removeClass('show');
        $("body").css('overflow', '');
      } else {
        sidebar.addClass('sidebar-show');
        backdrop.addClass('show');
        $("body").css('overflow', 'hidden');
      }
    });

    // aside toggle
    toggleButtonAside.click(() => {
      if (aside.hasClass('sidebar-show')) {
        aside.removeClass('sidebar-show');
        backdrop.removeClass('show');
        $("body").css('overflow', '');
      } else {
        aside.addClass('sidebar-show');
        backdrop.addClass('show');
        $("body").css('overflow', 'hidden');
      }
    });

    $(document).on("click", (event) => {
      if (sidebar.hasClass('sidebar-show')) {
        if (!$(event.target).closest("#sidebar").length && !$(event.target).closest(".sidebar-toggle").length) {
          sidebar.removeClass('sidebar-show');
          backdrop.removeClass('show');
          $("body").css('overflow', '');
        }
      }

      if (aside.hasClass('sidebar-show')) {
        if (!$(event.target).closest("#aside").length && !$(event.target).closest(".aside-toggle").length) {
          aside.removeClass('sidebar-show');
          backdrop.removeClass('show');
          $("body").css('overflow', '');
        }
      }
    });
  }

}
