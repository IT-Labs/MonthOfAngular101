import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventModel, EventStatus } from '../../models/event.model';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

const maxDateValidator = (control: FormControl) => {
  return null;
};

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html'
})
export class EventFormComponent implements OnInit {
  @Input() event: EventModel;
  @Output() eventSave = new EventEmitter<EventModel>();

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
      title: new FormControl(this.event.title, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
        maxDateValidator
      ]),
      date: new FormControl(this.event.date, [Validators.maxLength(10)]),
      status: new FormControl(this.event.status, [Validators.required])
    });

    this.eventForm.valueChanges.subscribe(formValue => {
      console.log('form value', formValue);
    });
  }

  save() {
    console.log('saving', this.event, this.eventForm.value);

    const parent = {
      ...{ a: 1, b: 2 },
      ...{ b: 3 },
      ...{ c: 4 }
    };

    parent.a === 1;
    parent.b === 3;

    const updatedEvent = {
      ...this.event,
      ...this.eventForm.value
    };

    console.log(updatedEvent);

    this.eventSave.emit(updatedEvent);
  }
}
