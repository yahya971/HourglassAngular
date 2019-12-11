import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyProgramItemComponent } from './daily-program-item.component';

describe('DailyProgramItemComponent', () => {
  let component: DailyProgramItemComponent;
  let fixture: ComponentFixture<DailyProgramItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyProgramItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyProgramItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
