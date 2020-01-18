import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../auth/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CoachGuard implements CanActivate, CanActivateChild {
  id: number;
  currentId: number;
  role: string;
  token: string;
  constructor(private tokenService: TokenStorageService, private route: ActivatedRoute,private r :Router) {
    this.route.params.subscribe(value => this.currentId = value['id']);
    this.role = this.tokenService.getAuthorities()[0];
    this.id = +this.tokenService.getUserId();
    this.token = this.tokenService.getToken();
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.role === "ROLE_COACH" && state.url.indexOf(''+this.id)!=-1)
      return true;
    else {
      alert("You Are Not Authorized to access this page");
      this.r.navigate(["/"]);
      console.log(this.currentId);
      return false;
    }
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
