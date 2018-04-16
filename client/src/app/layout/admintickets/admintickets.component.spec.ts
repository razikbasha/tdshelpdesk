import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminticketsComponent } from './admintickets.component';

describe('AdminticketsComponent', () => {
  let component: AdminticketsComponent;
  let fixture: ComponentFixture<AdminticketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminticketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
