import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachCreateProgramComponent } from './coach-create-program.component';

describe('CoachCreateProgramComponent', () => {
  let component: CoachCreateProgramComponent;
  let fixture: ComponentFixture<CoachCreateProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachCreateProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachCreateProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
