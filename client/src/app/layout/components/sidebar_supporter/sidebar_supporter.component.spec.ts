import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebaroneComponent } from './sidebarone.component';

describe('SidebaroneComponent', () => {
  let component: SidebaroneComponent;
  let fixture: ComponentFixture<SidebaroneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebaroneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebaroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
