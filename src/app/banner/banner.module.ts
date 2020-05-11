import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomBannerComponent } from './custom-banner/custom-banner.component';
import { ConfigModule, CmsConfig, UrlModule, I18nModule } from '@spartacus/core';
import { MyCartTotalComponent } from './my-cart-total/my-cart-total.component';
import { RouterModule } from '@angular/router';
import { CartSharedModule, CartCouponModule } from '@spartacus/storefront';



@NgModule({
  declarations: [CustomBannerComponent, MyCartTotalComponent],
  imports: [
    CommonModule,
    RouterModule,
    UrlModule,
    CartSharedModule,
    I18nModule,
    CartCouponModule,
    ConfigModule.withConfig({
      cmsComponents: {
        SimpleResponsiveBannerComponent: {
          component: CustomBannerComponent
        },
        CartTotalsComponent: {
          component: MyCartTotalComponent
        }
      }
    } as CmsConfig)
  ]
})
export class BannerModule { }
