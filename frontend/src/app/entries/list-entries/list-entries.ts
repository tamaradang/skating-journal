import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { EntryService } from '../../core/services/entry.service';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-list-entries',
  imports: [RouterLink, DatePipe],
  templateUrl: './list-entries.html',
  styleUrl: './list-entries.css',
})
export class ListEntries {
  private readonly entryService = inject(EntryService);
  readonly entries = this.entryService.entries;

}
