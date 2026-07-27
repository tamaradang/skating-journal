import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of, tap } from 'rxjs';
import { Entry } from '../models/entry.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  private readonly http = inject(HttpClient);
  private readonly _entries = signal<Entry[]>([]);
  readonly entries = this._entries.asReadonly();

  loadEntries(): Observable<void> {
    const url = environment.useMock
      ? `${environment.apiUrl}/entries.json`
      : `${environment.apiUrl}/entries`;

    return this.http.get<Entry[]>(url).pipe(
      tap(entries => this._entries.set(entries)),
      map(() => void 0)
    );
  }

  addEntry(entry: Entry): Observable<Entry> {
    if (environment.useMock) {
      const newEntry: Entry = {...entry, id: Date.now().toString()};

      this._entries.update(entries => [...entries, newEntry]);

      return of(newEntry);
    }

    return this.http
      .post<Entry>(`${environment.apiUrl}/entries`, entry)
      .pipe(
        tap(newEntry => {
          this._entries.update(entries => [...entries, newEntry]);
        })
      );
  }
}
