import { Component, OnInit } from '@angular/core';
import { NutritionalProgramService } from '../../../services/nutritional-program.service';
import { SportsProgramService } from '../../../services/sports-program.service';

@Component({
  selector: 'app-daily-program-list',
  templateUrl: './daily-program-list.component.html',
  styleUrls: ['./daily-program-list.component.css']
})
export class DailyProgramListComponent implements OnInit {
  week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  clicked = [true, false, false, false, false, false, false];
  nutritionalPrograms: Array<any>=[];
  sportsPrograms: Array<any>=[];
  constructor(private npService: NutritionalProgramService, private sportsService: SportsProgramService) {
    this.sportsService.getDayProgramByWeightLossProgram(1).subscribe(value1 => {
      this.sportsPrograms = value1;
      console.log(value1);
      this.npService.getDayProgramByWeightLossProgram(1).subscribe(value => {
        this.nutritionalPrograms = value;
        console.log(value);
      })
    })}

  showDay(i) {
    for (let j = 0; j < this.clicked.length; j++)
      if (this.clicked[j] == true)
        this.clicked[j] = false;
    this.clicked[i] = true;

  }

  ngOnInit() {


  }

}
