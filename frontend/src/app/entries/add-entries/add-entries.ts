import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EntryService } from '../../core/services/entry.service';

@Component({
  selector: 'app-add-entries',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-entries.html',
  styleUrl: './add-entries.css',
})
export class AddEntries implements OnInit {
  private readonly entryService = inject(EntryService) ;
  private readonly router = inject(Router) ;

  entryForm: FormGroup = new FormGroup({});

  constructor() {}

  ngOnInit() {
    const today = new Date();
    const localDate =
      `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    this.entryForm = new FormGroup({
      date: new FormControl(localDate, Validators.required),
      title: new FormControl('', Validators.required),
      notes: new FormControl(''),
    });
  }

  get date() {
    return this.entryForm.get('date');
  }

  get title() {
    return this.entryForm.get('title');
  }

  get notes() {
    return this.entryForm.get('notes');
  }

  reset(){
    this.entryForm.get('date')?.reset();
    this.entryForm.get('title')?.reset();
    this.entryForm.get('notes')?.reset();
  }

  onSubmit() {
    if (this.entryForm.invalid) {
      return;
    }

    const entry = {
      title: this.entryForm.value.title,
      notes: this.entryForm.value.notes,
      practiceDate: this.entryForm.value.date,
    };

    this.entryService.addEntry(entry).subscribe({
      next: () => this.router.navigate(['/']),
      error: err => console.error(err)
    });
  }
}
