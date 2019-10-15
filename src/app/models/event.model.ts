export enum EventStatus {
  draft = 'Draft',
  published = 'Published'
}

export interface EventModel {
  title: string;
  date: string;
  location: string;
  status: EventStatus;
  attending: string[];
}
