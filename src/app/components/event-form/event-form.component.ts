import { Component, OnInit, Input } from '@angular/core';
import { EventModel, EventStatus } from '../../models/event.model';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html'
})
export class EventFormComponent implements OnInit {
  @Input() event: EventModel;

  EventStatus = EventStatus;

  constructor() {}

  ngOnInit() {}

  save() {}
}
