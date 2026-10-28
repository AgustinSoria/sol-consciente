import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WombRitual } from './womb-ritual';

describe('WombRitual', () => {
  let component: WombRitual;
  let fixture: ComponentFixture<WombRitual>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WombRitual],
    }).compileComponents();

    fixture = TestBed.createComponent(WombRitual);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
