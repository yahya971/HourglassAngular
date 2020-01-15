import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  id: string;
  myForm: any;
  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.id = localStorage.getItem('coachId');
    this.myForm = this.fb.group({
      client1: [],
      client2: [],
      client3: [],
      client4: [],
      client5: [],
    });
  }
  nextForm() {
    window.localStorage.setItem('form2', JSON.stringify(this.myForm.value));
    this.router.navigate(['/espace/coach/create/program/form3/', this.id]);

  }
}
