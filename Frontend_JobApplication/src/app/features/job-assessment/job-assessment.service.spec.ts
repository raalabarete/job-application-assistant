import { TestBed } from '@angular/core/testing';

import { JobAssessmentService } from './job-assessment.service';

describe('JobAssessmentService', () => {
  let service: JobAssessmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobAssessmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
