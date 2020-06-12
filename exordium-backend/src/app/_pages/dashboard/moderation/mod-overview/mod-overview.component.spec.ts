import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModOverviewComponent } from './mod-overview.component';

describe('ModOverviewComponent', () => {
  let component: ModOverviewComponent;
  let fixture: ComponentFixture<ModOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
