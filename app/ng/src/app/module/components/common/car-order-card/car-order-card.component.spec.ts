import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarOrderCard } from './car-order-card';

describe('PersonalCabinetAutoCardComponent', () => {
  let component: CarOrderCard;
  let fixture: ComponentFixture<CarOrderCard>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarOrderCard ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarOrderCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
