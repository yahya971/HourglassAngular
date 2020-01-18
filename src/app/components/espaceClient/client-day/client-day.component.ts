import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProgramService} from '../../../services/program.service';
import {NutritionalProgramService} from '../../../services/nutritional-program.service';
import {SportsProgramService} from '../../../services/sports-program.service';
import {NutritionalProgram} from '../../../Models/nutritional-program.model';
import {SportsProgram} from '../../../Models/sports-program.model';
import {Program} from '../../../Models/program.model';
import {Meal} from '../../../Models/meal.model';
import $ from '../../../../assets/js/jquery.min';
import {TokenStorageService} from "../../../auth/token-storage.service";

@Component({
  selector: 'app-client-day',
  templateUrl: './client-day.component.html',
  styleUrls: ['./client-day.component.css']
})
export class ClientDayComponent implements OnInit {

  clientId: number;
  nutritionalProgram: NutritionalProgram;
  sportProgram: SportsProgram;
  program: Program;
  breakfasts: Meal[] = [];
  lunchs: Meal[] = [];
  dinners: Meal[] = [];
  snacks: Meal[] = [];
  constructor(private route: ActivatedRoute, private programService: ProgramService,
              private nutritionalProgramService: NutritionalProgramService,
              private sportsProgramService: SportsProgramService, private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.tabs();
    this.route.params.subscribe(params => {
      this.clientId = params.id;
      console.log(this.clientId);
      this.programService.getProgramByClientId(this.clientId).subscribe(program => {
        this.program = program;
        console.log(program.id);
        this.sportsProgramService.getDayProgramByWeightLossProgramAndDay(program.id, this.getCurrentDay()).subscribe(
          sportProgram => {
            console.log(sportProgram);
            this.sportProgram = sportProgram;
            this.sportProgram.workouts[0].equipment = this.sportProgram.workouts[0].equipment.slice(0, -1).split(',');
            console.log(sportProgram);
          }
        );
        this.nutritionalProgramService.getDayProgramByWeightLossProgramAndDay(program.id, this.getCurrentDay()).subscribe(
          nutritionalProgram => {
            console.log(nutritionalProgram);
            this.nutritionalProgram = nutritionalProgram;
            for ( const meal of this.nutritionalProgram.meals) {
              meal.ingredients = meal.ingredients.slice(0, -1).split(',');
            }
            this.nutritionalProgram.meals.map(value => {
              if (value.type === 'breakfast') {
                this.breakfasts.push(value);
              } else
                if (value.type === 'lunch') {
                this.lunchs.push(value);
              } else
                if (value.type === 'dinner') {
                  this.dinners.push(value);
                } else {
                  this.snacks.push(value);
                }
            });
            console.log(this.breakfasts);
            console.log(this.lunchs);
            console.log(this.dinners);
            console.log(this.snacks);
          }
        );
      });
    });
  }

  getCurrentDay(): string {
    const today = new Date();
    const dd = today.getDate() + 1;
    const mm = today.getMonth() + 1;
    let ddString = dd.toString();
    let mmString = mm.toString();

    const yyyy = today.getFullYear();
    if (dd < 10) {
      ddString = '0' + dd;
    }
    if (mm < 10) {
      mmString = '0' + mm;
    }
    return (yyyy + '-' + mmString + '-' + ddString);
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
