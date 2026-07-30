import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryForm } from './entry-form';
import { Entry } from '../../core/models/entry.model';

describe('EntryForm', () => {
  let component: EntryForm;
  let fixture: ComponentFixture<EntryForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntryForm],
    }).compileComponents();

    fixture = TestBed.createComponent(EntryForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate the form for an existing entry', () => {
    const entry: Entry = {
      id: '1',
      title: 'Backward spin',
      practiceDate: '2026-07-30',
      notes: 'Felt stronger',
    };

    fixture.componentRef.setInput('entry', entry);
    fixture.detectChanges();

    expect(component.entryForm.get('title')?.value).toBe(entry.title);
    expect(component.entryForm.get('practiceDate')?.value).toBe(entry.practiceDate);
    expect(component.entryForm.get('notes')?.value).toBe(entry.notes);
  });

  it('should clear the form when reset is called', () => {
    component.entryForm.patchValue({
      title: 'Backward spin',
      practiceDate: '2026-07-30',
      notes: 'Felt stronger',
    });

    component.reset();

    expect(component.entryForm.get('title')?.value).toBe('');
    expect(component.entryForm.get('practiceDate')?.value).toBe('');
    expect(component.entryForm.get('notes')?.value).toBe('');
  });

  it('should emit a save payload with the existing entry id', () => {
    const entry: Entry = {
      id: '1',
      title: 'Backward spin',
      practiceDate: '2026-07-30',
      notes: 'Felt stronger',
    };

    fixture.componentRef.setInput('entry', entry);
    fixture.detectChanges();

    let emittedEntry: Entry | undefined;
    component.save.subscribe((value) => {
      emittedEntry = value;
    });

    component.onSubmit();

    expect(emittedEntry).toEqual(entry);
  });
});
