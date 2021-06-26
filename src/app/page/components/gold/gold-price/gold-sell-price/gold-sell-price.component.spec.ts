import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldSellPriceComponent } from './gold-sell-price.component';

describe('GoldSellPriceComponent', () => {
  let component: GoldSellPriceComponent;
  let fixture: ComponentFixture<GoldSellPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoldSellPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldSellPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
