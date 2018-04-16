import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketcloseComponent } from './ticketclose.component';

describe('TicketcloseComponent', () => {
  let component: TicketcloseComponent;
  let fixture: ComponentFixture<TicketcloseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketcloseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketcloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
