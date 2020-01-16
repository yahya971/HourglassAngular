import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachUpdateWorkoutComponent } from './coach-update-workout.component';

describe('CoachUpdateWorkoutComponent', () => {
  let component: CoachUpdateWorkoutComponent;
  let fixture: ComponentFixture<CoachUpdateWorkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachUpdateWorkoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachUpdateWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
