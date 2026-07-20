import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entry } from '../models/entry.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  constructor(private http: HttpClient) {}

  getEntries(): Observable<Entry[]> {
    if (environment.useMock) {
      return this.http.get<Entry[]>(`${environment.apiUrl}/entries.json`);
    }

    return this.http.get<Entry[]>(`${environment.apiUrl}/entries`);
  }
}
