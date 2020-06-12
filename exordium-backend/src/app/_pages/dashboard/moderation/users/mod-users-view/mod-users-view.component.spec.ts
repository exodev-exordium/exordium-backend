import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModUsersViewComponent } from './mod-users-view.component';

describe('ModUsersViewComponent', () => {
  let component: ModUsersViewComponent;
  let fixture: ComponentFixture<ModUsersViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModUsersViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModUsersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
