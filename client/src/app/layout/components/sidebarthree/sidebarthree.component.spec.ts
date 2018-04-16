import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarthreeComponent } from './sidebarthree.component';

describe('SidebarthreeComponent', () => {
  let component: SidebarthreeComponent;
  let fixture: ComponentFixture<SidebarthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
