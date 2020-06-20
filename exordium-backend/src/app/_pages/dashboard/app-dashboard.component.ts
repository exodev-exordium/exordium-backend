import { Component, OnInit } from '@angular/core';

import PerfectScrollbar from 'perfect-scrollbar';

import $ from 'jquery';

@Component({
  selector: 'app-app-dashboard',
  templateUrl: './app-dashboard.component.html',
  styleUrls: ['./app-dashboard.component.scss']
})
export class AppDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
        // make the sidebar scroll
        this.activateScrollbar();

        // toggle the sidebar for mobil
        this.toggleSidebar();

        // make light/dark theme toggle
        this.toggleTheme();
  }

  activateScrollbar() {
    const container = document.querySelector('.sidebar-nav');
    const ps = new PerfectScrollbar(container);
  }

  toggleSidebar() {
    const sidebar = $('#sidebar');
    const toggleButton = $('.nav-toggle');
    const backdrop = $('.sidebar-backdrop');

    toggleButton.click(() => {
      if (sidebar.hasClass('sidebar-show')) {
        sidebar.removeClass('sidebar-show');
        backdrop.removeClass('show');
      } else {
        sidebar.addClass('sidebar-show');
        backdrop.addClass('show');
      }
    });

    backdrop.click(() => {
      sidebar.removeClass('sidebar-show');
      backdrop.removeClass('show');
    });
  }

  toggleTheme() {
    const mainApp = $('.app');
    const toggleButton = $('.theme-toggle');

    toggleButton.click(() => {
      if (mainApp.hasClass('light-theme')) {
        mainApp.removeClass('light-theme');
        mainApp.addClass('dark-theme');
      } else {
        mainApp.removeClass('dark-theme');
        mainApp.addClass('light-theme');
      }
    });
  }

}
