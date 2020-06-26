import { TestBed } from '@angular/core/testing';

import { AuthconfigInterceptor } from './authconfig.interceptor';

describe('AuthconfigInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthconfigInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthconfigInterceptor = TestBed.inject(AuthconfigInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
