import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../../services/client.service';
import {Client} from '../../../Models/client.model';
import {ActivatedRoute, Router} from '@angular/router';
import {CoachService} from '../../../services/coach.service';
import {Coach} from '../../../Models/coach.Model';
import {Follow} from '../../../Models/follow.model';
import {ProgramService} from '../../../services/program.service';
import {FollowService} from '../../../services/follow.service';
import {FollowAndClient} from '../../../Models/follow-and-client';

@Component({
  selector: 'app-my-clients',
  templateUrl: './my-clients.component.html',
  styleUrls: ['./my-clients.component.css']
})
export class MyClientsComponent implements OnInit {
  coach: Coach;
  followsAndClients: FollowAndClient[] = [];
  coachId: number;
  constructor(private clientService: ClientService, private router: ActivatedRoute,
              private programService: ProgramService, private followService: FollowService,
              private myRouter: Router) {
  }

  ngOnInit() {
    this.router.params.subscribe(params => { this.coachId = params.id; });
    localStorage.setItem('coachId', this.coachId.toString());
    this.clientService.getClientByCoachId(this.coachId).subscribe(clients => {
      for (const client of clients) {
        const followAndClient = new FollowAndClient(client);
        this.followsAndClients.push(followAndClient);
      }
      for ( const followAndClient of this.followsAndClients ) {
        this.programService.getProgramByClientId(followAndClient.client.id).subscribe(program => {
          this.followService.getAllFollow(program.id).subscribe(follows => {
            // console.log(follows);
            if (follows.length !== 0) {
              followAndClient.follows = this.getUnconsultedFollows(follows);
            }
          });
        });
      }
      console.log(this.followsAndClients);
    });
  }

  getUnconsultedFollows(follows: Follow[]): Follow[] {
    const newFollows: Follow[] = [];
    for (const follow of follows) {
      // console.log(follow);
      if (follow.consulted === false) {
        newFollows.push(follow);
      }
    }
    return newFollows;
  }
  findFollowsByClientId(followsAndClients: FollowAndClient[], clientId: number): Follow[]|null {
    for (const followAndClient of followsAndClients) {
      if (followAndClient.client.id === clientId) {
        return followAndClient.follows;
      }
    }
  }

  changeFollows(clientId: number) {
    const follows = this.findFollowsByClientId(this.followsAndClients, clientId);
    if ( follows.length > 0) {
      for (const follow of follows) {
        const newFollow = new Follow(follow.day, follow.question1, follow.question2 , follow.question3 , follow.question4,
          follow.comment, true, follow.weightLossProgram, follow.weight);
        this.followService.updateFollow(follow.id, newFollow).subscribe(value => {
          console.log(value);
        });
      }
    }
    this.myRouter.navigate(['/espace/coach/client/', this.coachId, clientId]);
  }

}
