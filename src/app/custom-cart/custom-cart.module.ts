import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCartComponent } from './custom-cart/custom-cart.component';
import { ConfigModule, CmsConfig, UrlModule } from '@spartacus/core';
import { SpinnerModule, MediaModule } from '@spartacus/storefront';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CustomCartComponent],
  imports: [
    CommonModule,
    UrlModule,
    SpinnerModule,
    MediaModule,
    RouterModule,
    ConfigModule.withConfig({
      cmsComponents: {
        CartComponent: {
          component: CustomCartComponent,
        },
      }
    } as CmsConfig)
  ]
})
export class CustomCartModule { }
