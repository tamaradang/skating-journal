import { Component, inject, OnInit, signal } from '@angular/core';
import { EntryService } from '../../core/services/entry.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PracticeCalendar } from '../../components/practice-calendar/practice-calendar';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, RouterLink, PracticeCalendar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  private readonly entryService = inject(EntryService); 
  readonly entries = this.entryService.entries;

  ngOnInit(): void {
    this.entryService.loadEntries().subscribe({
      error: err => console.error('Failed to load entries', err)
    });
  }
}
