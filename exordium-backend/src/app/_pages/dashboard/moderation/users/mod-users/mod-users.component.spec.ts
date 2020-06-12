import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModUsersComponent } from './mod-users.component';

describe('ModUsersComponent', () => {
  let component: ModUsersComponent;
  let fixture: ComponentFixture<ModUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
