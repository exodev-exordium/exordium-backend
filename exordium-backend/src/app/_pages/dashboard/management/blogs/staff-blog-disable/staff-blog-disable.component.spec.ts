import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffBlogDisableComponent } from './staff-blog-disable.component';

describe('StaffBlogDisableComponent', () => {
  let component: StaffBlogDisableComponent;
  let fixture: ComponentFixture<StaffBlogDisableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffBlogDisableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffBlogDisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
