import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyProgramItemWorkoutComponent } from './daily-program-item-workout.component';

describe('DailyProgramItemWorkoutComponent', () => {
  let component: DailyProgramItemWorkoutComponent;
  let fixture: ComponentFixture<DailyProgramItemWorkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyProgramItemWorkoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyProgramItemWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
