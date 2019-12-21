import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachCreateMealComponent } from './coach-create-meal.component';

describe('CoachCreateMealComponent', () => {
  let component: CoachCreateMealComponent;
  let fixture: ComponentFixture<CoachCreateMealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachCreateMealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachCreateMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
