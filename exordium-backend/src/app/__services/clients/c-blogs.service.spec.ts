import { TestBed } from '@angular/core/testing';

import { CBlogsService } from './c-blogs.service';

describe('CBlogsService', () => {
  let service: CBlogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CBlogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
