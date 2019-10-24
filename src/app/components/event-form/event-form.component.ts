import { Component, OnInit, Input } from '@angular/core';
import { EventModel, EventStatus } from '../../models/event.model';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html'
})
export class EventFormComponent implements OnInit {
  @Input() event: EventModel;

  EventStatus = EventStatus;

  eventForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    // this.formBuilder.group({
    //   title: [''],
    //   date: [''],
    //   status: ['']
    // });

    this.eventForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      date: new FormControl(''),
      status: new FormControl('')
    });

    this.eventForm.valueChanges.subscribe(formValue => {
      console.log('form value', formValue);
    });
  }

  save() {}
}
