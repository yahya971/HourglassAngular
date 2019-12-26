import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  id: string;
  constructor(private aroute: ActivatedRoute) {


  }

  ngOnInit() {
    this.id = localStorage.getItem('coachId');
    console.log(this.id);

  }


}
