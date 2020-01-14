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
  @Input() dietLabels;
  @Input() healthLabels;
  @Input() carbKcal;
  @Input() energKcal;
  @Input() fatKcal;
  @Input() proteinKcal;
  @Input() calcium;
  @Input() cholesterol;
  @Input() sugar;
  @Input() water;
  @Input() magnesium;
  @Input() vitE;



  constructor() { }

  ngOnInit() {
  }
  hidePopup() {
    document.getElementById('popup').classList.add('popupActive');
  }
  popup() {
    document.getElementById('popup').classList.remove('popupActive');
  }

}
