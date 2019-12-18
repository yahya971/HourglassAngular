import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-daily-program-item-meal',
  templateUrl: './daily-program-item-meal.component.html',
  styleUrls: ['./daily-program-item-meal.component.css']
})
export class DailyProgramItemMealComponent implements OnInit {
  @Input() meal: any;
  constructor() { }

  ngOnInit() {
  }

}
