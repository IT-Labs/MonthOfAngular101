import { Injectable } from '@angular/core';
import { EventModel, EventStatus } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  getEvents(): EventModel[] {
    return [
      {
        title: 'Angular 101 Sessions',
        date: '10 October 11:00',
        attending: ['Jas', 'Ti', 'Toj'],
        location: 'Arena',
        status: EventStatus.published
      },

      {
        title: 'Angular Advanced',
        date: '10 November 11:00',
        attending: ['Jas', 'Ti', 'Toj'],
        location: 'West',
        status: EventStatus.published
      }
    ];
  }
}
