import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldBuyPriceComponent } from './gold-buy-price.component';

describe('GoldBuyPriceComponent', () => {
  let component: GoldBuyPriceComponent;
  let fixture: ComponentFixture<GoldBuyPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoldBuyPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldBuyPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
