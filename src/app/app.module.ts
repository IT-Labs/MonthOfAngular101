import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsService } from './services/events.service';
import { EventListComponent } from './components/event-list/event-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EventFiltersComponent } from './components/event-filters/event-filters.component';

@NgModule({
  declarations: [AppComponent, EventListComponent, EventFiltersComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
