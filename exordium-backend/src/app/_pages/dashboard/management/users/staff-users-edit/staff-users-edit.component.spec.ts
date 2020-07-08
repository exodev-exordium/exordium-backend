import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffUsersEditComponent } from './staff-users-edit.component';

describe('StaffUsersEditComponent', () => {
  let component: StaffUsersEditComponent;
  let fixture: ComponentFixture<StaffUsersEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffUsersEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffUsersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
