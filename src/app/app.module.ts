import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsService } from './services/events.service';
import { EventListComponent } from './components/event-list/event-list.component';

@NgModule({
  declarations: [AppComponent, EventListComponent],
  imports: [BrowserModule],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
