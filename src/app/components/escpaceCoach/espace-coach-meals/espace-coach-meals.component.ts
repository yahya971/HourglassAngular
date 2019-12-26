import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-espace-coach-meals',
  templateUrl: './espace-coach-meals.component.html',
  styleUrls: ['./espace-coach-meals.component.css']
})
export class EspaceCoachMealsComponent implements OnInit {
  id: string;
  constructor() { }

  ngOnInit() {
    this.id = localStorage.getItem('coachId');
    console.log(this.id);
  }

}
