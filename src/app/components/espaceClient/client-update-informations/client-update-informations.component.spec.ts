import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientUpdateInformationsComponent } from './client-update-informations.component';

describe('ClientUpdateInformationsComponent', () => {
  let component: ClientUpdateInformationsComponent;
  let fixture: ComponentFixture<ClientUpdateInformationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientUpdateInformationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientUpdateInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
