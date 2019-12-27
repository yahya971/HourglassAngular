import { Component, OnInit } from '@angular/core';
import $ from '../../../../assets/js/jquery.min.js';

@Component({
  selector: 'app-espace-coach-meals',
  templateUrl: './espace-coach-meals.component.html',
  styleUrls: ['./espace-coach-meals.component.css']
})
export class EspaceCoachMealsComponent implements OnInit {
  id: string;
  constructor() { }

  ngOnInit() {
    this.tabs();
    this.id = localStorage.getItem('coachId');
    console.log(this.id);
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
