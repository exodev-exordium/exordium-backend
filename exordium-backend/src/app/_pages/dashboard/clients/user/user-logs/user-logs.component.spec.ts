import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLogsComponent } from './user-logs.component';

describe('UserLogsComponent', () => {
  let component: UserLogsComponent;
  let fixture: ComponentFixture<UserLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
