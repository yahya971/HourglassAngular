import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceCoachProgramsComponent } from './espace-coach-programs.component';

describe('EspaceCoachProgramsComponent', () => {
  let component: EspaceCoachProgramsComponent;
  let fixture: ComponentFixture<EspaceCoachProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaceCoachProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceCoachProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
