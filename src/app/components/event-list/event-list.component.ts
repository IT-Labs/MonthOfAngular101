import { Component, OnInit, Input } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { EventModel } from '../../models/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events: EventModel[] = [];
  eventsLoading = false;

  listFilters: {
    keyword: string;
    status: string;
  } = {
    keyword: 'advanced',
    status: ''
  };

  constructor(private eventService: EventsService) {}

  ngOnInit() {
    // 1
    this.eventsLoading = true;
    this.eventService.getEvents(this.listFilters).subscribe(events => {
      // 4
      this.events = events;
      this.eventsLoading = false;
      console.log(this.events);
    });

    // 2

    // 3
    console.log(this.events);
  }

  onFiltersChange(filters) {
    this.listFilters = filters;

    console.log('event list new filters', this.listFilters);

    this.eventsLoading = true;
    this.eventService.getEvents(this.listFilters).subscribe(events => {
      this.events = events;
      console.log(this.events);
      this.eventsLoading = false;
    });
  }
}
