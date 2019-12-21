import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachCreateCourseComponent } from './coach-create-course.component';

describe('CoachCreateCourseComponent', () => {
  let component: CoachCreateCourseComponent;
  let fixture: ComponentFixture<CoachCreateCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachCreateCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachCreateCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
