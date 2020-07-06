import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffBlogOverviewComponent } from './staff-blog-overview.component';

describe('StaffBlogOverviewComponent', () => {
  let component: StaffBlogOverviewComponent;
  let fixture: ComponentFixture<StaffBlogOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffBlogOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffBlogOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
