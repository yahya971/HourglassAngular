import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeDuJourComponent } from './programme-du-jour.component';

describe('ProgrammeDuJourComponent', () => {
  let component: ProgrammeDuJourComponent;
  let fixture: ComponentFixture<ProgrammeDuJourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammeDuJourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeDuJourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
