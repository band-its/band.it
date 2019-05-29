import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {

  navbarOpen = false;

  constructor(private oauthService: OAuthService) {
  }


  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }


  public login() {
    this.oauthService.initImplicitFlow();
  }

  public logoff() {
    this.oauthService.logOut();
  }

  public get name() {
    let claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims
  }


  ngOnInit() {
  }

}