import { Component, Inject, OnInit } from '@angular/core';
import { Config, RoutingConfig, AuthService, RoutingService, WindowRef } from '@spartacus/core';
import { LocalizedRoutesConfig } from './localized-routes-config';
import { interval, timer, fromEvent } from 'rxjs';
import { take, debounceTime, tap } from 'rxjs/operators';
import { AutoLogoutService } from './auto-logout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private autoLogout: AutoLogoutService) {
  }

  ngOnInit(): void {
    this.autoLogout.init();
  }



}
