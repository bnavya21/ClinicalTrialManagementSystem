import { TestBed } from '@angular/core/testing';

import { EmployeeusernameService } from './employeeusername.service';

describe('EmployeeusernameService', () => {
  let service: EmployeeusernameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeusernameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
