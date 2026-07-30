import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

import { EntryForm } from '../../components/entry-form/entry-form';
import { Entry } from '../../core/models/entry.model';
import { EntryService } from '../../core/services/entry.service';

@Component({
  standalone: true,
  imports: [EntryForm],
  templateUrl: './edit-entry.html',
  styleUrl: './edit-entry.css',
})
export class EditEntry {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly entryService = inject(EntryService);

  readonly entry = toSignal(
    this.entryService.getEntryById(this.route.snapshot.paramMap.get('id')!),
    { initialValue: undefined },
  );

  save(entry: Entry) {
    this.entryService.updateEntry(entry).subscribe({
      next: () => this.router.navigate(['/entry', entry.id]),
    });
  }
}
