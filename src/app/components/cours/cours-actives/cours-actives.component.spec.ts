import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursActivesComponent } from './cours-actives.component';

describe('CoursActivesComponent', () => {
  let component: CoursActivesComponent;
  let fixture: ComponentFixture<CoursActivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursActivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursActivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
