import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TickettypeComponent } from './tickettype.component';

describe('TickettypeComponent', () => {
  let component: TickettypeComponent;
  let fixture: ComponentFixture<TickettypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TickettypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TickettypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
