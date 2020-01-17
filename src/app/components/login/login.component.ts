import { Component, OnInit } from '@angular/core';
import {AuthLoginInfo} from '../../auth/login-info';
import {AuthService} from '../../auth/auth.service';
import {TokenStorageService} from '../../auth/token-storage.service';
import {Router} from '@angular/router';
import {ClientService} from '../../services/client.service';
import {CoachService} from '../../services/coach.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;

  constructor(private authService: AuthService, private tokenService: TokenStorageService, private router: Router,
              private clientService: ClientService, private coachService: CoachService) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenService.getAuthorities();
      // console.log(this.roles);
      this.redirectUser();
    }
  }

  onSubmit() {
    console.log(this.form);

    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password
    );

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.tokenService.saveToken(data.accessToken);
        this.tokenService.saveUsername(data.username);
        this.tokenService.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenService.getAuthorities();
        // this.reloadPage();
        this.redirectUser();

      },
      error => {
        console.log(error);

        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );

  }
  redirectUser() {
    if (this.roles[0] === 'ROLE_USER') {
      this.clientService.getClientByUsername(this.tokenService.getUsername()).subscribe(client => {
        this.router.navigate(['/espace/client/informations/', client.id]).then(value => {
          console.log(value);
          // window.location.reload();
        }, reason => {
          console.log(reason); // when there's an error
        });
      });
    } else {
      this.coachService.getCoachByUsername(this.tokenService.getUsername()).subscribe(coach => {
        this.router.navigate(['/espace/coach/informations/', coach.id]).then(value => {
          console.log(value); // true if navigation is successful
        }, reason => {
          console.log(reason); // when there's an error
        });
      });
    }
  }

  reloadPage() {
    window.location.reload();
  }

}
