import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceCoachWorkoutsComponent } from './espace-coach-workouts.component';

describe('EspaceCoachWorkoutsComponent', () => {
  let component: EspaceCoachWorkoutsComponent;
  let fixture: ComponentFixture<EspaceCoachWorkoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaceCoachWorkoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceCoachWorkoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
