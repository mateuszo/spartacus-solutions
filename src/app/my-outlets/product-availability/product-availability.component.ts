import { Component, OnInit } from '@angular/core';
import { CurrentProductService } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { Product } from '@spartacus/core';

@Component({
  selector: 'app-product-availability',
  templateUrl: './product-availability.component.html',
  styleUrls: ['./product-availability.component.scss']
})
export class ProductAvailabilityComponent implements OnInit {

  product$: Observable<Product> = this.currentProductService.getProduct();

  constructor(private currentProductService: CurrentProductService) { }

  ngOnInit(): void {
  }

}
