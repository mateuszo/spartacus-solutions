import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '@spartacus/core';
import { Observable, interval } from 'rxjs';
import { map, switchMap, tap, filter } from 'rxjs/operators';

const PROMOTED_PRODUCTS = ['358639', '779841', '458542']

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent implements OnInit {


  productCode$ = interval(2000).pipe(
    map((i => PROMOTED_PRODUCTS[i % PROMOTED_PRODUCTS.length]))
  );
  product$: Observable<Product> = this.productCode$.pipe(
    switchMap(code => this.productService.get(code)),
    filter(p => !!p)
  );

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

}
