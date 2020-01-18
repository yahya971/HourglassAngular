import { Component, OnInit } from '@angular/core';
import {Coach} from "../../../Models/coach.Model";
import {CoachService} from "../../../services/coach.service";
import {TokenStorageService} from "../../../auth/token-storage.service";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  id: number;
  coach: Coach;
  constructor(private tokenService: TokenStorageService, private coachService: CoachService) {
    this.id = +this.tokenService.getUserId();

  }

  ngOnInit() {
    this.coachService.getCoachById(this.id).subscribe(value => {
      this.coach = value;
      console.log(this.coach);
    });

  }


}
