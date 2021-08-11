import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndSeatComponent } from './ind-seat.component';

describe('IndSeatComponent', () => {
  let component: IndSeatComponent;
  let fixture: ComponentFixture<IndSeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndSeatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
