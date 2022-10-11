import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLeftProductsComponent } from './nav-left-products.component';

describe('NavLeftProductsComponent', () => {
  let component: NavLeftProductsComponent;
  let fixture: ComponentFixture<NavLeftProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavLeftProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavLeftProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
