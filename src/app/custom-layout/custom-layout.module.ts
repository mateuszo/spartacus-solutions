import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule } from '@spartacus/core';
import { LayoutConfig } from '@spartacus/storefront';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // ConfigModule.withConfig({
    //   layoutSlots: {
    //     header: {
    //       lg: {
    //         slots: [
    //           'NavigationBar',
    //           'SiteLinks',
    //           'SiteLogo',
    //           'SearchBox',
    //           'SiteLogin',
    //           'MiniCart',
    //           'SiteContext',
    //         ],
    //       },
    //       slots: ['PreHeader', 'SiteLogo', 'SearchBox', 'MiniCart'],
    //     },
    //     LandingPage2Template: {
    //       pageFold: 'Section2B',
    //       slots: [
    //         'Section5',
    //         'Section2B',
    //         'Section2A',
    //         'Section2C',
    //         'Section1',
    //         'Section3',
    //         'Section4',
    //       ],
    //     },
    //   },
    // } as LayoutConfig)
  ],
  providers: [
    // {provide: PAGE_LAYOUT_HANDLER, useClass: SomeClass, multi: true}
  ]
})
export class CustomLayoutModule { }
