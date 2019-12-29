import { Component, OnInit } from '@angular/core';
import $ from '../../../../assets/js/jquery.min';
import {WorkoutService} from '../../../services/workout.service';
import {Workout} from '../../../Models/workout.model';

@Component({
  selector: 'app-espace-coach-workouts',
  templateUrl: './espace-coach-workouts.component.html',
  styleUrls: ['./espace-coach-workouts.component.css']
})
export class EspaceCoachWorkoutsComponent implements OnInit {
  id: string;
  workouts: Array<Workout>;
  constructor(private workoutService: WorkoutService) { }
  ngOnInit() {
    this.tabs();
    this.id = localStorage.getItem('coachId');
    console.log(this.id);
    this.workoutService.getWorkoutByCoachId(this.id).subscribe(value => {
      this.workouts = value;
      console.log(this.workouts); });
  }
  tabs() {
    $('.ttm-tabs').each(function() {
      $(this).children('.content-tab').children().hide();
      $(this).children('.content-tab').children().first().show();
      $(this).find('.tabs').children('li').on('click', function(e) {
        const liActive = $(this).index(),
          contentActive = $(this).siblings().removeClass('active').parents('.ttm-tabs').children('.content-tab').children().eq(liActive);
        contentActive.addClass('active').fadeIn('slow');
        contentActive.siblings().removeClass('active');
        $(this).addClass('active').parents('.ttm-tabs').children('.content-tab').children().eq(liActive).siblings().hide();
        e.preventDefault();
      });
    });
  }

}
