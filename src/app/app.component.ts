import { Component, Inject, OnInit } from '@angular/core';
import { Config, RoutingConfig, AuthService, RoutingService, WindowRef, ContentSlotComponentData } from '@spartacus/core';
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

  component: ContentSlotComponentData = {
    flexType: 'CartComponent',
    typeCode: 'CMSFlexComponent',
    uid: 'CartComponent'
  }

  constructor(
    private autoLogout: AutoLogoutService) {
  }

  ngOnInit(): void {
    // this.autoLogout.init();
  }



}
