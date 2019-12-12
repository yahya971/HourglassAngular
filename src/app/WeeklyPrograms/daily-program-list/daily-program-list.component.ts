import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-program-list',
  templateUrl: './daily-program-list.component.html',
  styleUrls: ['./daily-program-list.component.css']
})
export class DailyProgramListComponent implements OnInit {
  week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  clicked = [true, false, false, false, false, false, false];
  constructor() { }

  showDay(i) {
    for (let j = 0; j < this.clicked.length; j++)
      if (this.clicked[j] == true)
        this.clicked[j] = false;
    this.clicked[i] = true;

  }

  ngOnInit() {
  }

}
