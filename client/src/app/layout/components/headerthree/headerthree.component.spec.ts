import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderthreeComponent } from './headerthree.component';

describe('HeaderthreeComponent', () => {
  let component: HeaderthreeComponent;
  let fixture: ComponentFixture<HeaderthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
