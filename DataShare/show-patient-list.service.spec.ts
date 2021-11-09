import { TestBed } from '@angular/core/testing';

import { ShowPatientListService } from './show-patient-list.service';

describe('ShowPatientListService', () => {
  let service: ShowPatientListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowPatientListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
