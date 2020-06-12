import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConnectionsComponent } from './user-connections.component';

describe('UserConnectionsComponent', () => {
  let component: UserConnectionsComponent;
  let fixture: ComponentFixture<UserConnectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserConnectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
