import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketdashboardComponent } from './ticketdashboard.component';

describe('TicketdashboardComponent', () => {
  let component: TicketdashboardComponent;
  let fixture: ComponentFixture<TicketdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
