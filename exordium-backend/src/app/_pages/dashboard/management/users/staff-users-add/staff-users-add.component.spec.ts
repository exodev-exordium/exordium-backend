import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffUsersAddComponent } from './staff-users-add.component';

describe('StaffUsersAddComponent', () => {
  let component: StaffUsersAddComponent;
  let fixture: ComponentFixture<StaffUsersAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffUsersAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffUsersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
