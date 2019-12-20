import { TestBed } from '@angular/core/testing';

import { DayProgramsService } from './day-programs.service';

describe('DayProgramsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DayProgramsService = TestBed.get(DayProgramsService);
    expect(service).toBeTruthy();
  });
});
