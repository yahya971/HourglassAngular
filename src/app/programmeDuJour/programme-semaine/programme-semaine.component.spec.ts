import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeSemaineComponent } from './programme-semaine.component';

describe('ProgrammeSemaineComponent', () => {
  let component: ProgrammeSemaineComponent;
  let fixture: ComponentFixture<ProgrammeSemaineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammeSemaineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeSemaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
