import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffUsersOverviewComponent } from './staff-users-overview.component';

describe('StaffUsersOverviewComponent', () => {
  let component: StaffUsersOverviewComponent;
  let fixture: ComponentFixture<StaffUsersOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffUsersOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffUsersOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
