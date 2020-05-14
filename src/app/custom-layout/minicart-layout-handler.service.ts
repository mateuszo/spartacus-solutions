import { Injectable } from '@angular/core';
import { PageLayoutHandler, BREAKPOINT } from '@spartacus/storefront';
import { ActiveCartService } from '@spartacus/core';
import { Observable, of, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MinicartLayoutHandlerService implements PageLayoutHandler {

  constructor(
    protected activeCartService: ActiveCartService,
  ) { }
  handle(
    slots$: Observable<string[]>,
    pageTemplate?: string,
    section?: string,
    breakpoint?: BREAKPOINT
  ): Observable<string[]> {
    const totalItems$: Observable<number> = this.activeCartService.getActive().pipe(map(c => c.totalItems));
    return combineLatest([slots$, totalItems$]).pipe(
      map(([slots, totalItems]) => {
        if (totalItems > 0) {
          return slots;
        } else {
          return slots.filter(s => s !== 'MiniCart');
        }
      })
    )
  }
}
