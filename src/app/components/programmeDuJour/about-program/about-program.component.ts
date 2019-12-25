import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-program',
  templateUrl: './about-program.component.html',
  styleUrls: ['./about-program.component.css']
})
export class AboutProgramComponent implements OnInit {
  @Input() program: any;

  constructor() { }

  ngOnInit() {
  }

}
