import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCoachComponent } from './contact-coach.component';

describe('ContactCoachComponent', () => {
  let component: ContactCoachComponent;
  let fixture: ComponentFixture<ContactCoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactCoachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
