import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsService } from './services/events.service';
import { EventListComponent } from './components/event-list/event-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EventFiltersComponent } from './components/event-filters/event-filters.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { EventFormComponent } from './components/event-form/event-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventFiltersComponent,
    EventDetailsComponent,
    EventFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
