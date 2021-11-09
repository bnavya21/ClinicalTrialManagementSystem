import { TestBed } from '@angular/core/testing';

import { PatientusernameService } from './patientusername.service';

describe('PatientusernameService', () => {
  let service: PatientusernameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientusernameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
