import { TestBed } from '@angular/core/testing';

import { MDevblogService } from './m-devblog.service';

describe('MDevblogService', () => {
  let service: MDevblogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MDevblogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
