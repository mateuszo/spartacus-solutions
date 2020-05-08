import { Injectable } from '@angular/core';
import { UserOrderService, Product, Order, AuthService, UserOrderConnector } from '@spartacus/core';
import { filter, map, mergeAll, tap, take, mergeMap, pluck, reduce, takeUntil, scan, delay, concatMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Observable, timer, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecentlyBoughtService {

  constructor(
    private userOrderService: UserOrderService,
    private orderConnector: UserOrderConnector,
    protected authService?: AuthService) { }



  private getUserId() {
    return this.authService
      .getOccUserId()
      .pipe(
        take(1));
  }

  private getOrder(code: string) {
    return this.getUserId()
      .pipe(
        mergeMap(userId => this.orderConnector.get(userId, code))
      );
  }

  getRecentlyBought(): Observable<Product[]> {
    return this.userOrderService.getOrderHistoryList(5)
      .pipe(
        map(oh => oh.orders),
        filter(orders => orders.length > 0),
        mergeAll(),
        map((order: Order) => order.code),
        mergeMap((code) => this.getOrder(code)),
        mergeMap((order: Order) => order.entries),
        pluck('product'),
        scan(
          (acc: Product[], prod: Product) => [...acc, prod], []),
      );
  }
}
