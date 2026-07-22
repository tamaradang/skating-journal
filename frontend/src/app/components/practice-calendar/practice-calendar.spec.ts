import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeCalendar } from './practice-calendar';

describe('PracticeCalendar', () => {
  let component: PracticeCalendar;
  let fixture: ComponentFixture<PracticeCalendar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeCalendar],
    }).compileComponents();

    fixture = TestBed.createComponent(PracticeCalendar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
