import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketinformationComponent } from './ticketinformation.component';

describe('TicketinformationComponent', () => {
  let component: TicketinformationComponent;
  let fixture: ComponentFixture<TicketinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
