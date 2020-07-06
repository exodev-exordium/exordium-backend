import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffContactComponent } from './staff-contact.component';

describe('StaffContactComponent', () => {
  let component: StaffContactComponent;
  let fixture: ComponentFixture<StaffContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
