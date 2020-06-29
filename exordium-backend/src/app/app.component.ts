import { Component, OnInit } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor (
    private router: Router,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {}
        case event instanceof NavigationEnd: {
          const title = this.getTitle(this.router.routerState, this.router.routerState.root).join(' - ');
          this.titleService.setTitle(`Exordium - ${title}`);

          setTimeout(() => {
            document.querySelector('body').classList.add('loaded');
          }, 1000);
        }
        case event instanceof NavigationCancel: {}
        case event instanceof NavigationError: {
          setTimeout(() => {
            document.querySelector('body').classList.add('loaded');
          }, 1000);

          break;
        }
        default: {
          break;
        }
      }
    });
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
