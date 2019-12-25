import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachUpdateInformationsComponent } from './coach-update-informations.component';

describe('CoachUpdateInformationsComponent', () => {
  let component: CoachUpdateInformationsComponent;
  let fixture: ComponentFixture<CoachUpdateInformationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachUpdateInformationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachUpdateInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
