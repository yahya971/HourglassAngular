import { TestBed } from '@angular/core/testing';

import { AudianceService } from './audiance.service';

describe('AudianceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AudianceService = TestBed.get(AudianceService);
    expect(service).toBeTruthy();
  });
});
