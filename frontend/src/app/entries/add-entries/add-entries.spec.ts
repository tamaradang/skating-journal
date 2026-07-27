import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEntries } from './add-entries';

describe('AddEntries', () => {
  let component: AddEntries;
  let fixture: ComponentFixture<AddEntries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEntries],
    }).compileComponents();

    fixture = TestBed.createComponent(AddEntries);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
