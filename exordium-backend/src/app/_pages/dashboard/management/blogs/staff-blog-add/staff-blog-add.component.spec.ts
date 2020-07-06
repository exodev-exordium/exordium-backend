import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffBlogAddComponent } from './staff-blog-add.component';

describe('StaffBlogAddComponent', () => {
  let component: StaffBlogAddComponent;
  let fixture: ComponentFixture<StaffBlogAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffBlogAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffBlogAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
