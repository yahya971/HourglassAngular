import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  id: number;
  constructor(private  aroute: ActivatedRoute ) { }

  ngOnInit() {
    this.aroute.params.subscribe(value => {
      this.id = value['id'];
      console.log(this.id);
    })
  }

}
