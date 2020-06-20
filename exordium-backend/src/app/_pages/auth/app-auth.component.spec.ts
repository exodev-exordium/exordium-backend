import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAuthComponent } from './app-auth.component';

describe('AppAuthComponent', () => {
  let component: AppAuthComponent;
  let fixture: ComponentFixture<AppAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
