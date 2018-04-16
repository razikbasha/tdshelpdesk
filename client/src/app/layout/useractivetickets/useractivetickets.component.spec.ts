import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseractiveticketsComponent } from './useractivetickets.component';

describe('UseractiveticketsComponent', () => {
  let component: UseractiveticketsComponent;
  let fixture: ComponentFixture<UseractiveticketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseractiveticketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseractiveticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
