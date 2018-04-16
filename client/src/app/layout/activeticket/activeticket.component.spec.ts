import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveticketComponent } from './activeticket.component';

describe('ActiveticketComponent', () => {
  let component: ActiveticketComponent;
  let fixture: ComponentFixture<ActiveticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
