import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.css']
})
export class MealCardComponent implements OnInit {

  @Input() calories: any;
  @Input() name: any;
  @Input() description: any;
  @Input() photo: any;
  @Input() time: any;
  constructor() { }

  ngOnInit() {
  }

}
