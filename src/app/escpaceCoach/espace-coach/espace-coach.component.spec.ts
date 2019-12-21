import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceCoachComponent } from './espace-coach.component';

describe('EspaceCoachComponent', () => {
  let component: EspaceCoachComponent;
  let fixture: ComponentFixture<EspaceCoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaceCoachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
