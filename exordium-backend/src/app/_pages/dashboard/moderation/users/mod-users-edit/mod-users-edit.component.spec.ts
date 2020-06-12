import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModUsersEditComponent } from './mod-users-edit.component';

describe('ModUsersEditComponent', () => {
  let component: ModUsersEditComponent;
  let fixture: ComponentFixture<ModUsersEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModUsersEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModUsersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
