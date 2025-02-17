import { TestBed } from '@angular/core/testing';

import { CentralizedApiServiceService } from './centralized-api-service.service';

describe('CentralizedApiServiceService', () => {
  let service: CentralizedApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentralizedApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
