import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import bootstrap from '@fullcalendar/bootstrap';
import list from '@fullcalendar/list';
import {ActivatedRoute} from '@angular/router';
import {ProgramService} from '../../../services/program.service';
import {NutritionalProgramService} from '../../../services/nutritional-program.service';
import {SportsProgramService} from '../../../services/sports-program.service';
import {NutritionalProgram} from '../../../Models/nutritional-program.model';
import {SportsProgram} from '../../../Models/sports-program.model';
import {EventCalendar} from '../../../Models/eventCalendar';

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
  clientId: number;
  nutritionalPrograms: NutritionalProgram[] = [];
  sportPrograms: SportsProgram[] = [];
  events: EventCalendar[] = [];
  constructor(private route: ActivatedRoute, private programService: ProgramService,
              private nutritionalProgramService: NutritionalProgramService,
              private sportsProgramService: SportsProgramService) {
    // this.events.push(new EventCalendar('test', '2020-01-17', '2020-01-17', 'blue'));
    this.route.params.subscribe(params => {
      this.clientId = +params.id;
      console.log(this.clientId);
      this.programService.getProgramByClientId(this.clientId).subscribe(program => {
        console.log(program)
        this.nutritionalProgramService.getDayProgramByWeightLossProgram(program.id).subscribe(nutritionalPrograms => {
          console.log(this.nutritionalPrograms);
          this.nutritionalPrograms = nutritionalPrograms;
          for (const nutritionalProgram of this.nutritionalPrograms) {
            if ( nutritionalProgram.mealsNumber !== 1) {
              this.events.push(new EventCalendar('You have to eat ' + nutritionalProgram.mealsNumber + ' meals ',
                nutritionalProgram.day, nutritionalProgram.day, 'blue'));
            } else {
              this.events.push(new EventCalendar('You have to eat ' + nutritionalProgram.mealsNumber + ' meal',
                nutritionalProgram.day, nutritionalProgram.day, 'blue'));
            }
          }
        });
        this.sportsProgramService.getDayProgramByWeightLossProgram(program.id).subscribe(sportPrograms => {
          this.sportPrograms = sportPrograms;
          for ( const sportsProgram of this.sportPrograms) {
            const hour1 = new Date('2020-02-17' + 'T' + sportsProgram.workouts[0].startingHour).getHours();
            const hour2 = new Date(sportsProgram.workouts[0].duration).getHours();
            this.events.push(new EventCalendar('You have the ' + sportsProgram.workouts[0].name + ' workout',
              sportsProgram.day + 'T' + sportsProgram.workouts[0].startingHour,
              sportsProgram.day + 'T0' + (hour1 + hour2) + ':00:00', 'green'
            ));
          }
        });
        console.log(this.events);
      });
    });
  }

  ngOnInit() {
    /*const date: Date = new Date('2001-10-21T03:00:00');
    console.log(date);
    console.log(date.getHours());*/

  }

}
