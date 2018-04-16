import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketpendingComponent } from './ticketpending.component';

describe('TicketpendingComponent', () => {
  let component: TicketpendingComponent;
  let fixture: ComponentFixture<TicketpendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketpendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketpendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
