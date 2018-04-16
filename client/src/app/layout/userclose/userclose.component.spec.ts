import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercloseComponent } from './userclose.component';

describe('UsercloseComponent', () => {
  let component: UsercloseComponent;
  let fixture: ComponentFixture<UsercloseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsercloseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
