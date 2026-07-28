import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { EntryService } from '../../core/services/entry.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-view-entry',
  imports: [DatePipe, RouterLink],
  templateUrl: './view-entry.html',
  styleUrl: './view-entry.css',
})
export class ViewEntry {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly entryService = inject(EntryService);

  private readonly id = this.route.snapshot.paramMap.get('id')!;

  readonly entry = toSignal(this.entryService.getEntryById(this.id), { initialValue: null });
}
