import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseropenComponent } from './useropen.component';

describe('UseropenComponent', () => {
  let component: UseropenComponent;
  let fixture: ComponentFixture<UseropenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseropenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseropenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
