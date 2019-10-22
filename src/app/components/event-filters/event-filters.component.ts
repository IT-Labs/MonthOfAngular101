import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-filters',
  templateUrl: './event-filters.component.html',
  styleUrls: ['./event-filters.component.css']
})
export class EventFiltersComponent implements OnInit {
  @Input() filters: { keyword: string; status: string };

  @Output() filtersChange = new EventEmitter<{
    keyword: string;
    status: string;
  }>();

  constructor() {}

  ngOnInit() {}

  onKeywordChange(e) {
    const keyword = e.target.value;
    console.log(keyword);

    this.filtersChange.emit({ keyword, status: this.filters.status });
  }
}
