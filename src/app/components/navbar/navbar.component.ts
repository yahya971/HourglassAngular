import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../auth/token-storage.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  islogged = false;
  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.islogged = this.tokenStorageService.getUsername() !== null;
    console.log(this.tokenStorageService.getUsername());
    console.log(this.islogged);
  }

  signOut() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
