import { Injectable } from '@angular/core';
import { EventModel, EventStatus } from '../models/event.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(private httpClient: HttpClient) {}

  getEvents(filters: {
    keyword: string;
    status: string;
  }): Observable<EventModel[]> {
    let params = new HttpParams();
    params = params.append('q', filters.keyword);
    if (filters.status) {
      params.append('status', filters.status);
    }

    return this.httpClient
      .get<EventModel[]>('http://localhost:3000/events', {
        params
      })
      .pipe(delay(500));
  }
}
