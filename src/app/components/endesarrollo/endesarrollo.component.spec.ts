import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndesarrolloComponent } from './endesarrollo.component';

describe('EndesarrolloComponent', () => {
  let component: EndesarrolloComponent;
  let fixture: ComponentFixture<EndesarrolloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndesarrolloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndesarrolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
