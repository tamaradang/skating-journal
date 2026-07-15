import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEntries } from './list-entries';

describe('ListEntries', () => {
  let component: ListEntries;
  let fixture: ComponentFixture<ListEntries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListEntries],
    }).compileComponents();

    fixture = TestBed.createComponent(ListEntries);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
