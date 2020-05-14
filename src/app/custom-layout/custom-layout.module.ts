import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule } from '@spartacus/core';
import { LayoutConfig, PAGE_LAYOUT_HANDLER } from '@spartacus/storefront';
import { MinicartLayoutHandlerService } from './minicart-layout-handler.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      layoutSlots: {
        ProductDetailsPageTemplate: {
          slots: [
            'Summary',
            'UpSelling',
            'CrossSelling',
            'SiteLinks',
            'PlaceholderContentSlot',
          ],
        },
        SearchResultsListPageTemplate: {
          md: {
            slots: [
              'Section2',
              'ProductLeftRefinements',
              'SearchResultsListSlot',
              // 'Section4',
            ]
          },
          xs: {
            slots: [
              'ProductLeftRefinements',
              'SearchResultsListSlot',
            ]
          }
        },
        header: {
          lg: {
            slots: [
              // 'SiteContext',
              // 'SiteLinks',
              'SiteLogo',
              'NavigationBar',
              'SearchBox',
              'SiteLogin',
              'MiniCart',
            ],
          },
          slots: ['PreHeader', 'SiteLogo', 'SearchBox', 'MiniCart'],
        },
      },
    } as LayoutConfig)
  ],
  providers: [
    { provide: PAGE_LAYOUT_HANDLER, useClass: MinicartLayoutHandlerService, multi: true }
  ]
})
export class CustomLayoutModule { }
