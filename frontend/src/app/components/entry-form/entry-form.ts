import { Component, effect, input, output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Entry } from '../../core/models/entry.model';

@Component({
  selector: 'app-entry-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './entry-form.html',
  styleUrl: './entry-form.css',
})
export class EntryForm {
  private static readonly emptyFormValue = {
    title: '',
    practiceDate: '',
    notes: '',
  };

  private readonly fb = inject(FormBuilder);

  readonly entry = input<Entry | null>(null);

  readonly save = output<Entry>();

  readonly entryForm = this.fb.nonNullable.group({
    title: this.fb.nonNullable.control('', Validators.required),
    practiceDate: this.fb.nonNullable.control('', Validators.required),
    notes: this.fb.nonNullable.control(''),
  });

  constructor() {
    effect(() => {
      const entry = this.entry();

      if (entry) {
        this.entryForm.patchValue({
          title: entry.title,
          practiceDate: entry.practiceDate,
          notes: entry.notes,
        });
      } else {
        this.reset();
      }
    });
  }

  isInvalid(controlName: string): boolean {
    const control = this.entryForm.get(controlName);
    return !!control && control.invalid && (control.touched || control.dirty);
  }

  reset(): void {
    this.entryForm.reset(EntryForm.emptyFormValue);
  }

  onSubmit(): void {
    if (this.entryForm.invalid) {
      this.entryForm.markAllAsTouched();
      return;
    }

    const entry = this.entry();
    const formValue = this.entryForm.getRawValue();

    this.save.emit({
      id: entry?.id ?? '',
      ...formValue,
    });
  }
}
