import { Component, OnInit } from '@angular/core';

import PerfectScrollbar from 'perfect-scrollbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'exordium-backend';

  ngOnInit(): void {
    const container = document.querySelector('.c-sidebar-nav');
    const ps = new PerfectScrollbar(container);
  }
}
