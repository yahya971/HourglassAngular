import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-coach-create-program',
  templateUrl: './coach-create-program.component.html',
  styleUrls: ['./coach-create-program.component.css']
})
export class CoachCreateProgramComponent implements OnInit {

  id: any;
  constructor(private router: ActivatedRoute) {
    this.router.params.subscribe(value => {
      this.id = value.id;
      });
  }

  ngOnInit() {
  }

}
