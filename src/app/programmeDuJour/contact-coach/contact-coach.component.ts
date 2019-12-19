import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact-coach',
  templateUrl: './contact-coach.component.html',
  styleUrls: ['./contact-coach.component.css']
})
export class ContactCoachComponent implements OnInit {
  @Input() program: any;
  constructor() { }

  ngOnInit() {
  }

}
