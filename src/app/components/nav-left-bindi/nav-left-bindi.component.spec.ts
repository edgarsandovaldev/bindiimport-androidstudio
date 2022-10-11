import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLeftBindiComponent } from './nav-left-bindi.component';

describe('NavLeftBindiComponent', () => {
  let component: NavLeftBindiComponent;
  let fixture: ComponentFixture<NavLeftBindiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavLeftBindiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavLeftBindiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
