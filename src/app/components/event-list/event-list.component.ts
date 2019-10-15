import { Component, OnInit, Input } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { EventModel } from '../../models/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  @Input() something: number;

  someProp = 'Something something';

  events: EventModel[];

  constructor(private eventService: EventsService) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();

    console.log(this.events);
  }
}
