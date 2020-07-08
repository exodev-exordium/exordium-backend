import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffUsersDisableComponent } from './staff-users-disable.component';

describe('StaffUsersDisableComponent', () => {
  let component: StaffUsersDisableComponent;
  let fixture: ComponentFixture<StaffUsersDisableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffUsersDisableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffUsersDisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
