import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModUsersDisableComponent } from './mod-users-disable.component';

describe('ModUsersDisableComponent', () => {
  let component: ModUsersDisableComponent;
  let fixture: ComponentFixture<ModUsersDisableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModUsersDisableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModUsersDisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
