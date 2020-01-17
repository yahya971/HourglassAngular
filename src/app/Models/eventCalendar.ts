export class EventCalendar {
  title: string;
  start: string;
  end: string;
  backgroundColor: string;
  borderColor = 'black';
  textColor = 'white';


  constructor(title: string, start: string, end: string, backgroundColor: string) {
    this.title = title;
    this.start = start;
    this.end = end;
    this.backgroundColor = backgroundColor;
  }

}
