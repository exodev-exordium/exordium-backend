import { TestBed } from '@angular/core/testing';

import { MBlogsService } from './m-blogs.service';

describe('MBlogsService', () => {
  let service: MBlogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MBlogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
