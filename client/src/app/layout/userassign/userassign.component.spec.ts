import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserassignComponent } from './userassign.component';

describe('UserassignComponent', () => {
  let component: UserassignComponent;
  let fixture: ComponentFixture<UserassignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserassignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserassignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
