import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgottenPassComponent } from './forgotten-pass.component';

describe('ForgottenPassComponent', () => {
  let component: ForgottenPassComponent;
  let fixture: ComponentFixture<ForgottenPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgottenPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgottenPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
