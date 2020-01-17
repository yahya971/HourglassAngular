import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachCreateDayProgram2Component } from './coach-create-day-program2.component';

describe('CoachCreateDayProgram2Component', () => {
  let component: CoachCreateDayProgram2Component;
  let fixture: ComponentFixture<CoachCreateDayProgram2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachCreateDayProgram2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachCreateDayProgram2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
