import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachCreateDayProgram1Component } from './coach-create-day-program1.component';

describe('CoachCreateDayProgram1Component', () => {
  let component: CoachCreateDayProgram1Component;
  let fixture: ComponentFixture<CoachCreateDayProgram1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachCreateDayProgram1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachCreateDayProgram1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
