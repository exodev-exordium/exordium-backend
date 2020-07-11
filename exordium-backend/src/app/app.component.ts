import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, NavigationError } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';

import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loader = this.loadingBar.useRef();

  constructor(
    private router: Router,
    private titleService: Title,
    private loadingBar: LoadingBarService
  ) { }

  ngOnInit(): void {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loader.start();
      }

      if (event instanceof NavigationEnd) {
        const title = this.getTitle(this.router.routerState, this.router.routerState.root).join(' - ');
        this.titleService.setTitle(`Exordium - ${title}`);

        setTimeout(() => {
          this.loader.complete();
        }, 2000);
      }

      if (event instanceof NavigationError) {
        setTimeout(() => {
          this.loader.stop();
        }, 2000);
      }

    });

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      document.querySelector('body').classList.add('loaded');
    }, 1000);
  }

  getTitle(state, parent) {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }

    return data;
  }

}
