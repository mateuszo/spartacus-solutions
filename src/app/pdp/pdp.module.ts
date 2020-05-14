import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomProductIntroComponent } from './custom-product-intro/custom-product-intro.component';
import { CustomProductSummaryComponent } from './custom-product-summary/custom-product-summary.component';
import { StarRatingModule, IconModule } from '@spartacus/storefront';
import { ConfigModule, CmsConfig } from '@spartacus/core';



@NgModule({
  declarations: [CustomProductIntroComponent, CustomProductSummaryComponent],
  imports: [
    CommonModule,
    StarRatingModule,
    IconModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductIntroComponent: {
          component: CustomProductIntroComponent
        },
        ProductSummaryComponent: {
          component: CustomProductSummaryComponent
        }
      }
    } as CmsConfig)
  ],
})
export class PdpModule { }
