import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachUpdateMealComponent } from './coach-update-meal.component';

describe('CoachUpdateMealComponent', () => {
  let component: CoachUpdateMealComponent;
  let fixture: ComponentFixture<CoachUpdateMealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachUpdateMealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachUpdateMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
