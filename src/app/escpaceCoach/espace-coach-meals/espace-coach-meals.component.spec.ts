import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceCoachMealsComponent } from './espace-coach-meals.component';

describe('EspaceCoachMealsComponent', () => {
  let component: EspaceCoachMealsComponent;
  let fixture: ComponentFixture<EspaceCoachMealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaceCoachMealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceCoachMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
