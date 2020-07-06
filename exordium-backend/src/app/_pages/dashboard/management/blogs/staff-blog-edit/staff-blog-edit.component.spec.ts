import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffBlogEditComponent } from './staff-blog-edit.component';

describe('StaffBlogEditComponent', () => {
  let component: StaffBlogEditComponent;
  let fixture: ComponentFixture<StaffBlogEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffBlogEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffBlogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
