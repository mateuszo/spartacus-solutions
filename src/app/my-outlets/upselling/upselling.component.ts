import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ProductSearchService, Product, ProductSearchPage, SearchConfig } from '@spartacus/core';
import { Observable, of, Subscription } from 'rxjs';
import { map, mergeAll, tap, scan, filter, distinctUntilChanged, take } from 'rxjs/operators';
import { CurrentProductService } from '@spartacus/storefront';

@Component({
  selector: 'app-upselling',
  templateUrl: './upselling.component.html',
  styleUrls: ['./upselling.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpsellingComponent implements OnInit, OnDestroy {

  sub: Subscription;

  products$: Observable<Observable<Product>[]> = this.productSearchService.getResults()
    .pipe(
      filter(sr => !!sr && sr.hasOwnProperty('products')),
      map((sr: ProductSearchPage) => sr.products.map(p => of(p))),
    );

  constructor(private productSearchService: ProductSearchService, private currentProductService: CurrentProductService) { }

  ngOnInit(): void {
    this.sub = this.currentProductService.getProduct().pipe(
      filter(p => !!p && p.hasOwnProperty('name')),
      map(p => p.name),
    ).subscribe(
      pname => {
        console.log('searching for ', pname);
        this.productSearchService.search(pname, { pageSize: 9 } as SearchConfig);
      }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
