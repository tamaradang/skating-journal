import { Component, OnInit, signal } from '@angular/core';
import { Entry } from '../../core/models/entry.model';
import { EntryService } from '../../core/services/entry.service';
import { DatePipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-list-entries',
  imports: [DatePipe],
  templateUrl: './list-entries.html',
  styleUrl: './list-entries.css',
})
export class ListEntries implements OnInit {
  entries = signal<Entry[]>([]);

  constructor(private entryService: EntryService) {}

  ngOnInit() {
    this.entryService.getEntries().subscribe({
      next: (entries: Entry[]) => {
        this.entries.set(entries);
      },
      error: (error) => console.log('entries error', error),
    });
  }
}
