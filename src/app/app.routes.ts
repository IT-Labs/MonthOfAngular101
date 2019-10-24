import { Route } from '@angular/router';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';

export const APP_ROUTES: Route[] = [
  {
    path: 'events',
    component: EventListComponent
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent
  }
];
