import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishtlistsComponent } from './wishtlists.component';

describe('WishtlistsComponent', () => {
  let component: WishtlistsComponent;
  let fixture: ComponentFixture<WishtlistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishtlistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishtlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
