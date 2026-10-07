import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAssessmentComponent } from './job-assessment.component';

describe('JobAssessmentComponent', () => {
  let component: JobAssessmentComponent;
  let fixture: ComponentFixture<JobAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobAssessmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
