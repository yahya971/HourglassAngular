import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyProgramListComponent } from './daily-program-list.component';

describe('DailyProgramListComponent', () => {
  let component: DailyProgramListComponent;
  let fixture: ComponentFixture<DailyProgramListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyProgramListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyProgramListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
