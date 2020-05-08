import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { WindowRef, AuthService } from '@spartacus/core';
import { tap, debounceTime } from 'rxjs/operators';
import { LogoutConfig } from './logout-config';

@Injectable({
  providedIn: 'root'
})
export class AutoLogoutService {

  constructor(private winRef: WindowRef, private authService: AuthService, private config: LogoutConfig) { }

  init() {
    fromEvent(this.winRef.nativeWindow, 'click')
      // this.routingService.isNavigating()
      .pipe(
        tap((v) => console.log('before debounce', v)),
        debounceTime(this.config.logoutConfig.logoutTimeout),
        tap((v) => console.log('after debounce', v)),
      )
      .subscribe(
        _ => this.authService.logout()
      );
  }
}
