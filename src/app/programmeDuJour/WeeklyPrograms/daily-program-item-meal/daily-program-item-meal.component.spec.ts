import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyProgramItemMealComponent } from './daily-program-item-meal.component';

describe('DailyProgramItemMealComponent', () => {
  let component: DailyProgramItemMealComponent;
  let fixture: ComponentFixture<DailyProgramItemMealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyProgramItemMealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyProgramItemMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
