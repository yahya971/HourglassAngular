import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDayComponent } from './client-day.component';

describe('ClientDayComponent', () => {
  let component: ClientDayComponent;
  let fixture: ComponentFixture<ClientDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
