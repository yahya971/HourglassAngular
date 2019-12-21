import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceCoachCoursesComponent } from './espace-coach-courses.component';

describe('EspaceCoachCoursesComponent', () => {
  let component: EspaceCoachCoursesComponent;
  let fixture: ComponentFixture<EspaceCoachCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaceCoachCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceCoachCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
