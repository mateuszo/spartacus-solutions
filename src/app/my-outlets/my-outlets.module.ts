import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOutletComponent } from './my-outlet/my-outlet.component';
import { OutletRefModule, ProductListModule, CarouselModule, MediaModule } from '@spartacus/storefront';
import { PromoComponent } from './promo/promo.component';
import { RouterModule } from '@angular/router';
import { ProductAvailabilityComponent } from './product-availability/product-availability.component';
import { UpsellingComponent } from './upselling/upselling.component';
import { UrlModule } from '@spartacus/core';
import { CartQuantityComponent } from './cart-quantity/cart-quantity.component';



@NgModule({
  declarations: [MyOutletComponent, PromoComponent, ProductAvailabilityComponent, UpsellingComponent, CartQuantityComponent],
  imports: [
    CommonModule,
    OutletRefModule,
    ProductListModule,
    RouterModule,
    CarouselModule,
    MediaModule,
    UrlModule
  ],
  exports: [MyOutletComponent]
})
export class MyOutletsModule { }
