import { Component } from '@angular/core';
import { Entry } from '../../core/models/entry.model';
import { EntryService } from '../../core/services/entry.service';

@Component({
  selector: 'app-list-entries',
  imports: [],
  templateUrl: './list-entries.html',
  styleUrl: './list-entries.css',
})
export class ListEntries {

  entries:Entry[] = [];

  constructor(private entryService:EntryService){}

  ngOnInit(){
    this.entryService.getEntries()
      .subscribe({
        next: (entries: Entry[]) => {
          this.entries = entries;
        },
        error: (error) => console.log(error)
      });
    }
}
