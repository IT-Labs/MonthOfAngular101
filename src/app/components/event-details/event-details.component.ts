import { Component, OnInit } from '@angular/core';
import { EventModel } from '../../models/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html'
})
export class EventDetailsComponent implements OnInit {
  event: EventModel;
  eventLoading: boolean;

  constructor() {}

  ngOnInit() {}
}
