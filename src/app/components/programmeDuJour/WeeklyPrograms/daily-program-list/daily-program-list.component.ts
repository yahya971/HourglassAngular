import { Component, OnInit } from '@angular/core';
import { NutritionalProgramService } from '../../../../services/nutritional-program.service';
import { SportsProgramService } from '../../../../services/sports-program.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-daily-program-list',
  templateUrl: './daily-program-list.component.html',
  styleUrls: ['./daily-program-list.component.css']
})
export class DailyProgramListComponent implements OnInit {
  week = ['1', '2', '3', '4', '5', '6', '7'];
  clicked = [true, false, false, false, false, false, false];
  nutritionalPrograms: Array<any>=[];
  sportsPrograms: Array<any> = [];
  id: number;
  constructor(private npService: NutritionalProgramService, private sportsService: SportsProgramService, private router: ActivatedRoute) {
    this.router.params.subscribe(params => {
    this.id = params.id;
      console.log(this.id)
    });
    this.sportsService.getDayProgramByWeightLossProgram(this.id).subscribe(value1 => {
      this.sportsPrograms = value1;
      console.log(value1);

    })
    this.npService.getDayProgramByWeightLossProgram(this.id).subscribe(value => {
      this.nutritionalPrograms = value;
      console.log(value);
    })
  }

  showDay(i) {
    for (let j = 0; j < this.clicked.length; j++)
      if (this.clicked[j] == true)
        this.clicked[j] = false;
    this.clicked[i] = true;

  }

  ngOnInit() {


  }

}
