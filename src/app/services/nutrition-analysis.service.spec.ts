import { TestBed } from '@angular/core/testing';

import { NutritionAnalysisService } from './nutrition-analysis.service';

describe('NutritionAnalysisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NutritionAnalysisService = TestBed.get(NutritionAnalysisService);
    expect(service).toBeTruthy();
  });
});
