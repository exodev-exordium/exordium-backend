import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffBlogComponent } from './staff-blog.component';

describe('StaffBlogComponent', () => {
  let component: StaffBlogComponent;
  let fixture: ComponentFixture<StaffBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
