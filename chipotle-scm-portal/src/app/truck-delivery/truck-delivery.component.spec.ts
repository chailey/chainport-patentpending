import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckDeliveryComponent } from './truck-delivery.component';

describe('TruckDeliveryComponent', () => {
  let component: TruckDeliveryComponent;
  let fixture: ComponentFixture<TruckDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
