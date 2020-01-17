import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import bootstrap from '@fullcalendar/bootstrap';
import list from '@fullcalendar/list';

@Component({
  selector: 'app-client-calendar',
  templateUrl: './client-calendar.component.html',
  styleUrls: ['./client-calendar.component.css']
})
export class ClientCalendarComponent implements OnInit {

  calendarPlugins = [ dayGridPlugin, list, bootstrap];
  header = {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,listMonth'
  };
  constructor() { }

  ngOnInit() {
  }

}
