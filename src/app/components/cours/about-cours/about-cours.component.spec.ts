import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCoursComponent } from './about-cours.component';

describe('AboutCoursComponent', () => {
  let component: AboutCoursComponent;
  let fixture: ComponentFixture<AboutCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
