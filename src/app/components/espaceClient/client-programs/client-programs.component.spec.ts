import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProgramsComponent } from './client-programs.component';

describe('ClientProgramsComponent', () => {
  let component: ClientProgramsComponent;
  let fixture: ComponentFixture<ClientProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
