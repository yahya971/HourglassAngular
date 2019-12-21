import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachCreateWorkoutComponent } from './coach-create-workout.component';

describe('CoachCreateWorkoutComponent', () => {
  let component: CoachCreateWorkoutComponent;
  let fixture: ComponentFixture<CoachCreateWorkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachCreateWorkoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachCreateWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
