import { TestBed } from '@angular/core/testing';

import { MWatchdogService } from './m-watchdog.service';

describe('MWatchdogService', () => {
  let service: MWatchdogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MWatchdogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
