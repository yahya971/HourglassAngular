import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {CoachService} from '../../../services/coach.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Coach} from '../../../Models/coach.Model';

@Component({
  selector: 'app-coach-update-informations',
  templateUrl: './coach-update-informations.component.html',
  styleUrls: ['./coach-update-informations.component.css']
})
export class CoachUpdateInformationsComponent implements OnInit {
id: any;
  coach: Coach;
  constructor(private coachService: CoachService, private aroute: ActivatedRoute, private router: Router) {
    aroute.params.subscribe(params => {this.id = params.id; });
    this.coachService.getCoachById(this.id).subscribe(value => {
      this.coach = value;
      console.log(this.coach);
    });
  }
  ngOnInit() {
  }
  onSubmit(formulaire: NgForm) {
    console.log(formulaire.value);
    if (formulaire.value.name !== '') {
      this.coach.name = formulaire.value.name;
    }
    if (formulaire.value.lastname !== '') {
      this.coach.lastname = formulaire.value.lastname;
    }
    if (formulaire.value.age !== '') {
      this.coach.age = formulaire.value.age;
    }
    if (formulaire.value.experience !== '') {
      this.coach.experience = formulaire.value.experience;
    }
    if (formulaire.value.phone !== '') {
      this.coach.phone = formulaire.value.phone;
    }
    if (formulaire.value.email !== '') {
      this.coach.email = formulaire.value.email;
    }
    if (formulaire.value.username !== '') {
      this.coach.username = formulaire.value.username;
    }
    if (formulaire.value.password !== '') {
      this.coach.password = formulaire.value.password;
    }
    if (formulaire.value.speciality !== '') {
      this.coach.speciality = formulaire.value.speciality;
    }
    if (formulaire.value.resume !== '') {
      this.coach.resume = formulaire.value.resume;
    }
    if (formulaire.value.skill1 !== '') {
      this.coach.score1 = formulaire.value.skill1;
    }
    if (formulaire.value.skill2 !== '') {
      this.coach.score2 = formulaire.value.skill2;
    }
    if (formulaire.value.skill3 !== '') {
      this.coach.score3 = formulaire.value.skill3;
    }
    if (formulaire.value.skill4 !== '') {
      this.coach.score4 = formulaire.value.skill4;
    }
    this.coachService.updateCoach(this.coach , this.id);
    this.router.navigate(['espace/coach/informations/', this.id]);
}
}
