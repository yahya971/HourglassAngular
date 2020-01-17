import {Component, DoCheck, OnInit} from '@angular/core';
import {TokenStorageService} from '../../auth/token-storage.service';
import {ClientService} from '../../services/client.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProgramService} from '../../services/program.service';
import {FollowService} from '../../services/follow.service';
import {Follow} from '../../Models/follow.model';
import {FollowAndClient} from '../../Models/follow-and-client';
import {CoachService} from '../../services/coach.service';
import $ from '../../../assets/login/vendor/bootstrap/js/bootstrap.js';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {
  islogged = false;
  followsAndClients: FollowAndClient[] = [];
  newFollowsAndClients: FollowAndClient[] = [];
  coachId: number;
  notifications: string[] = [];
  notificationVerified = false;
  role;
  constructor(private tokenStorageService: TokenStorageService, private clientService: ClientService, private router: ActivatedRoute,
              private programService: ProgramService, private followService: FollowService, private myRouter: Router,
              private coachService: CoachService) { }

  ngOnInit() {
    $('#toast').toast('show');
    this.islogged = this.tokenStorageService.getUsername() !== null;
    // console.log(this.tokenStorageService.getUsername());
    // console.log(this.islogged);
    this.role = this.tokenStorageService.getAuthorities()[0];
    if (this.role === 'ROLE_COACH') {
      this.coachService.getCoachByUsername(this.tokenStorageService.getUsername()).subscribe(coach => {
        this.coachId = coach.id;
        console.log(coach);
        this.clientService.getClientByCoachId(this.coachId).subscribe(clients => {
          for (const client of clients) {
            const followAndClient = new FollowAndClient(client);
            this.followsAndClients.push(followAndClient);
          }
          this.notifications = [];
          for ( const followAndClient of this.followsAndClients ) {
            console.log(followAndClient.client);
            this.programService.getProgramByClientId(followAndClient.client.id).subscribe(program => {
              console.log(program);
              this.followService.getAllFollow(program.id).subscribe(follows => {
                // console.log(follows);
                if (follows.length !== 0) {
                  followAndClient.follows = this.getUnconsultedFollows(follows);
                  if (followAndClient.follows.length !== 0) {
                    this.notifications.push(followAndClient.client.name + ' ' + followAndClient.client.lastname);
                    const newFollowAndClient = new FollowAndClient(followAndClient.client, this.getUnconsultedFollows(follows));
                    this.newFollowsAndClients.push(newFollowAndClient);
                  }
                }
              });
            });
          }
          console.log('aaaaaa');
          // console.log(this.notifications);
          console.log(this.newFollowsAndClients);
        });
      });
    }
  }
  ngDoCheck(): void {
    /*if (this.role === 'ROLE_COACH') {
      this.coachService.getCoachByUsername(this.tokenStorageService.getUsername()).subscribe(coach => {
        this.coachId = coach.id;
        console.log(coach);
        this.clientService.getClientByCoachId(this.coachId).subscribe(clients => {
          for (const client of clients) {
            const followAndClient = new FollowAndClient(client);
            this.followsAndClients.push(followAndClient);
          }
          this.newFollowsAndClients = [];
          for ( const followAndClient of this.followsAndClients ) {
            console.log(followAndClient.client);
            this.programService.getProgramByClientId(followAndClient.client.id).subscribe(program => {
              console.log(program);
              this.followService.getAllFollow(program.id).subscribe(follows => {
                // console.log(follows);
                if (follows.length !== 0) {
                  followAndClient.follows = this.getUnconsultedFollows(follows);
                  if (followAndClient.follows.length !== 0) {
                    // this.notifications.push(followAndClient.client.name + ' ' + followAndClient.client.lastname);
                    const newFollowAndClient = new FollowAndClient(followAndClient.client, this.getUnconsultedFollows(follows));
                    this.newFollowsAndClients.push(newFollowAndClient);
                  }
                }
              });
            });
          }
          console.log('aaaaaa');
          // console.log(this.notifications);
          console.log(this.newFollowsAndClients);
        });
      });
    }*/
  }

  signOut() {
    this.tokenStorageService.signOut();
    window.location.reload();
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

  popupNotification() {
    this.notificationVerified = true;
  }

}
