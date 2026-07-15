import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListEntries } from './entries/list-entries/list-entries';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListEntries],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('skating-journal');
}
