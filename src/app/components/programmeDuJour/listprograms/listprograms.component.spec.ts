import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListprogramsComponent } from './listprograms.component';

describe('ListprogramsComponent', () => {
  let component: ListprogramsComponent;
  let fixture: ComponentFixture<ListprogramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListprogramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListprogramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
