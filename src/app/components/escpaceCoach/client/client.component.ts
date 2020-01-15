import { Component, OnInit } from '@angular/core';
import $ from '../../../../assets/js/jquery.min';
import {ActivatedRoute} from '@angular/router';
import {Client} from '../../../Models/client.model';
import {ClientService} from '../../../services/client.service';
import {Follow} from '../../../Models/follow.model';
import {ProgramService} from '../../../services/program.service';
import {FollowService} from '../../../services/follow.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clientId;
  coachId;
  client: Client;
  programId;
  follows: Array<Follow>;
  constructor(private route: ActivatedRoute, private clientService: ClientService,
              private programService: ProgramService, private followService: FollowService) { }

  ngOnInit() {
    this.tabs();
    this.route.params.subscribe(params => {
      this.coachId = params.id;
      this.clientId = params.clientId;
    });
    this.clientService.getClientById(this.clientId).subscribe(value => {
      this.client = value;
      console.log(this.client);
    });
    this.programService.getProgramByClientId(this.clientId).subscribe(value => {
      this.programId = value.id;
      this.followService.getAllFollow(this.programId).subscribe(follows => {
        this.follows = follows;
      });
    });
  }

  tabs() {
    $('.ttm-tabs').each(function() {
      $(this).children('.content-tab').children().hide();
      $(this).children('.content-tab').children().first().show();
      $(this).find('.tabs').children('li').on('click', function(e) {
        var liActive = $(this).index(),
          contentActive = $(this).siblings().removeClass('active').parents('.ttm-tabs').children('.content-tab').children().eq(liActive);
        contentActive.addClass('active').fadeIn('slow');
        contentActive.siblings().removeClass('active');
        $(this).addClass('active').parents('.ttm-tabs').children('.content-tab').children().eq(liActive).siblings().hide();
        e.preventDefault();
      });
    });
  }

}
