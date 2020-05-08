import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, OrderEntry, ActiveCartService } from '@spartacus/core';
import { filter, switchMap, map } from 'rxjs/operators';
import { CurrentProductService } from '@spartacus/storefront';

@Component({
  selector: 'app-cart-quantity',
  templateUrl: './cart-quantity.component.html',
  styleUrls: ['./cart-quantity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartQuantityComponent implements OnInit {

  private product$: Observable<Product> = this.currentProductService
    .getProduct()
    .pipe(filter(product => !!product));

  quantity$: Observable<number> = this.product$.pipe(
    switchMap((product: Product) => this.cartService.getEntry(product.code)),
    // filter(cartEntry => !!cartEntry),
    map((cart: OrderEntry) => cart ? cart.quantity : 0)
  );

  constructor(private currentProductService: CurrentProductService, private cartService: ActiveCartService) { }

  ngOnInit(): void {
  }

}
