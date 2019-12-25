import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavEspaceComponent } from './sidenav-espace.component';

describe('SidenavEspaceComponent', () => {
  let component: SidenavEspaceComponent;
  let fixture: ComponentFixture<SidenavEspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavEspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavEspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
