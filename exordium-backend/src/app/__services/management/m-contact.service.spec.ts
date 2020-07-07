import { TestBed } from '@angular/core/testing';

import { MContactService } from './m-contact.service';

describe('MContactService', () => {
  let service: MContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
