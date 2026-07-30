import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { Entry } from '../../core/models/entry.model';
import { EntryService } from '../../core/services/entry.service';
import { EntryForm } from '../../components/entry-form/entry-form';

@Component({
  selector: 'app-add-entries',
  imports: [EntryForm],
  templateUrl: './add-entries.html',
  styleUrl: './add-entries.css',
})
export class AddEntries {
  private readonly entryService = inject(EntryService);
  private readonly router = inject(Router);

  save(entry: Entry) {
    this.entryService.addEntry(entry).subscribe({
      next: () => this.router.navigate(['/']),
    });
  }
}
