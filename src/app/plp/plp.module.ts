import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CmsConfig, ConfigModule, I18nModule, UrlModule } from '@spartacus/core';
import { ListNavigationModule, ViewConfigModule, ProductListModule, StarRatingModule, IconModule, MediaModule, AddToCartModule, ProductVariantsModule } from '@spartacus/storefront';
import { ListItemComponent } from './list-item/list-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ListComponent, ListItemComponent],
  imports: [
    CommonModule,
    ListNavigationModule,
    I18nModule,
    UrlModule,
    StarRatingModule,
    IconModule,
    RouterModule,
    ProductListModule,
    MediaModule,
    ProductVariantsModule,
    AddToCartModule,
    ConfigModule.withConfig({
      cmsComponents: {
        CMSProductListComponent: {
          component: ListComponent,
        },
        ProductGridComponent: {
          component: ListComponent,
        },
      }
    } as CmsConfig)
  ]
})
export class PlpModule { }
