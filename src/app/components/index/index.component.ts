import { Component, OnInit } from '@angular/core';
import $ from '../../../assets/js/jquery.min.js';
import {Program} from '../../Models/program.model';
import {ProgramService} from '../../services/program.service';
import {CoachService} from '../../services/coach.service';
import {Coach} from '../../Models/coach.Model';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  programs: Array<Program>;
  coaches: Array<Coach>;
  constructor(private programService: ProgramService, private coachService: CoachService) { }

  ngOnInit() {
    this.programService.getAllPrograms().subscribe(value => {
      this.programs = value;
    });
    this.coachService.getAllCoaches().subscribe( value => {
      this.coaches = value;
    });
    this.jquery();
  }
  jquery() {
    $(window).on("load",function() {
      // will first fade out the loading animation
      $("#preloader").fadeOut();
      // will fade out the whole DIV that covers the website.
      $("#status").fadeOut(9000);
    });

    $(window).scroll(function(){
      if ( matchMedia( 'only screen and (min-width: 1200px)' ).matches )
      {
        if ($(window).scrollTop() >= 50 ) {
          $('.ttm-stickable-header').addClass('fixed-header');
          $('.ttm-stickable-header').addClass('visible-title');
        }
        else {

          $('.ttm-stickable-header').removeClass('fixed-header');
          $('ttm-stickable-header').removeClass('visible-title');
        }
      }
    });

    $(".blog-slide").owlCarousel({
      loop:true,
      margin:0,
      nav: $('.blog-slide').data('nav'),
      dots: $('.blog-slide').data('dots'),
      autoplay: $('.blog-slide').data('auto'),
      smartSpeed: 3000,
      responsive:{
        0:{
          items:1,
        },
        600:{
          items:2,
        },
        992:{
          items: $('.blog-slide').data('item')
        }
      }
    });

// ===== 2- event slide ====

    $(".event-slide").owlCarousel({
      loop:true,
      margin:0,
      nav: $('.event-slide').data('nav'),
      dots: $('.event-slide').data('dots'),
      autoplay: $('.event-slide').data('auto'),
      smartSpeed: 1000,
      responsive:{
        0:{
          items:1,
        },
        600:{
          items:2,
        },
        992:{
          items: $('.event-slide').data('item')
        }
      }
    });

// ===== 3 - Post slide ====

    $(".post-slide").owlCarousel({
      loop:true,
      margin:0,
      nav: $('.post-slide').data('nav'),
      dots: $('.post-slide').data('dots'),
      autoplay: $('.post-slide').data('auto'),
      smartSpeed: 3000,
      responsive:{
        0:{
          items:1,
        },
        600:{
          items:2,
        },
        992:{
          items: $('.post-slide').data('item')
        }
      }
    });

// ===== 4 - Testimonial slide ====

    $(".testimonial-slide").owlCarousel({
      loop:true,
      margin:0,
      smartSpeed: 1000,
      nav: $('.testimonial-slide').data('nav'),
      dots: $('.testimonial-slide').data('dots'),
      autoplay: $('.testimonial-slide').data('auto'),
      responsive:{
        0:{
          items:1,
        },
        600:{
          items:1,
        },
        1000:{
          items: $('.testimonial-slide').data('item')
        }
      }
    });

// ===== 5 - Clients-logo ====

    $(".clients-slide").owlCarousel({
      margin: 0,
      loop:true,
      nav: $('.clients-slide').data('nav'),
      dots: $('.clients-slide').data('dots'),
      autoplay: $('.clients-slide').data('auto'),
      smartSpeed: 3000,
      responsive:{
        0:{
          items:1
        },
        480:{
          items:2
        },
        575:{
          items:3
        },
        768:{
          items:4
        },
        992:{
          items: $('.clients-slide').data('item')
        }
      }
    });


// ===== 6 - Team slide====


    $(".team-slide").owlCarousel({
      loop:true,
      margin:0,
      nav: $('.team-slide').data('nav'),
      dots: $('.team-slide').data('dots'),
      autoplay: $('.team-slide').data('auto'),
      smartSpeed: 3000,
      responsive:{
        0:{
          items:1,
        },
        480:{
          items:2,
        },
        768:{
          items:3
        },
        1200:{
          items: $('.team-slide').data('item')
        }
      }
    });

// ===== 7 - customer slide====

    $(".customer-slide").owlCarousel({
      loop:true,
      margin:0,
      nav: $('.customer-slide').data('nav'),
      dots: $('.customer-slide').data('dots'),
      autoplay: $('.customer-slide').data('auto'),
      smartSpeed: 3000,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      responsive:{
        0:{
          items:1,
        },
        1200:{
          items: $('.customer-slide').data('item')
        }
      }
    });


// ===== 8 - classic-blog-slide ====

    $(".classic-blog-slide").owlCarousel({
      loop:true,
      margin:0,
      nav: $('.classic-blog-slide').data('nav'),
      dots: $('.classic-blog-slide').data('dots'),
      autoplay: $('.classic-blog-slide').data('auto'),
      smartSpeed: 1000,
      responsive:{
        0:{
          items:1,
        },
        600:{
          items:1,
        },
        992:{
          items: $('.classic-blog-slide').data('item')
        }
      }
    });

  }
}
