import { TestBed } from '@angular/core/testing';

import { RegistrationformService } from './registrationform.service';

describe('RegistrationformService', () => {
  let service: RegistrationformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
