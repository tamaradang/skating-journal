import { Component, computed, inject } from '@angular/core';
import {
  DateAdapter,
  provideCalendar,
  CalendarPreviousViewDirective,
  CalendarTodayDirective,
  CalendarNextViewDirective,
  CalendarMonthViewComponent,
  CalendarEvent,
  CalendarView,
  CalendarDatePipe,
  CalendarDateFormatter,
  CalendarMonthViewBeforeRenderEvent,
} from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { toLocalDate } from '../../core/utils/date-utils';
import { Subject } from 'rxjs/internal/Subject';
import { CustomDateFormatter } from './custom-date-formatter.provider';
import { EntryService } from '../../core/services/entry.service';

@Component({
  selector: 'app-practice-calendar',
  imports: [
    CalendarPreviousViewDirective,
    CalendarTodayDirective,
    CalendarNextViewDirective,
    CalendarMonthViewComponent,
    CalendarDatePipe,
  ],
  providers: [
    provideCalendar(
      { provide: DateAdapter, useFactory: adapterFactory },
      {
        dateFormatter: {
          provide: CalendarDateFormatter,
          useClass: CustomDateFormatter,
        },
      },
    ),
  ],
  templateUrl: './practice-calendar.html',
  styleUrl: './practice-calendar.css',
})
export class PracticeCalendar {
  private readonly entryService = inject(EntryService);
  readonly CalendarView = CalendarView;

  view: CalendarView = CalendarView.Month;
  viewDate = new Date();
  refresh = new Subject<void>();

  readonly events = computed<CalendarEvent[]>(() =>
    this.entryService.entries().map((entry) => ({
      start: new Date(`${entry.practiceDate}T12:00:00`),
      title: entry.title,
      meta: entry,
    })),
  );

  setView(view: CalendarView) {
    this.view = view;
  }

  beforeMonthViewRender(renderEvent: CalendarMonthViewBeforeRenderEvent): void {
    renderEvent.body.forEach((day) => {
      if (day.events.length > 0) {
        day.cssClass = 'practice-day';
      }
    });
  }

  dayClicked({ date, events }: { date?: Date; events?: CalendarEvent[] } = {}): void {
    //TODO: Implement logic to handle day click if needed
    console.log('Day clicked:', date, events);
  }

  closeOpenMonthViewDay() {
    //TODO: Implement logic to close open month view day if needed
  }
  
}
