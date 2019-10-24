import { Component, OnInit } from '@angular/core';
import { EventModel } from '../../models/event.model';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html'
})
export class EventDetailsComponent implements OnInit {
  event: EventModel;
  eventLoading: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventService: EventsService
  ) {}

  ngOnInit() {
    const eventId = this.activatedRoute.snapshot.paramMap.get('id');

    console.log('route param id', eventId);

    this.eventLoading = true;
    this.eventService.getEventById(eventId).subscribe(event => {
      this.event = event;
      this.eventLoading = false;
    });
  }
}
