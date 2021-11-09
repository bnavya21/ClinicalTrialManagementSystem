import { TestBed } from '@angular/core/testing';

import { SelectedPatientmrnService } from './selected-patientmrn.service';

describe('SelectedPatientmrnService', () => {
  let service: SelectedPatientmrnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedPatientmrnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
