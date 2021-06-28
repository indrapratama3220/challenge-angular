import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusablePageComponent } from './reusable-page.component';

describe('ReusablePageComponent', () => {
  let component: ReusablePageComponent;
  let fixture: ComponentFixture<ReusablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusablePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
