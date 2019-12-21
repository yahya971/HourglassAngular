import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachInformationsComponent } from './coach-informations.component';

describe('CoachInformationsComponent', () => {
  let component: CoachInformationsComponent;
  let fixture: ComponentFixture<CoachInformationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachInformationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
