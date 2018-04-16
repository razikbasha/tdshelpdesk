import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignticketsComponent } from './assigntickets.component';

describe('AssignticketsComponent', () => {
  let component: AssignticketsComponent;
  let fixture: ComponentFixture<AssignticketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignticketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
