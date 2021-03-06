import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { translations, translationChunksConfig } from '@spartacus/assets';
import { B2cStorefrontModule, OutletRefModule, PageComponentModule } from '@spartacus/storefront';
import { MyOutletsModule } from './my-outlets/my-outlets.module';
import { OccConfig, ConfigModule, Config, CmsConfig, CmsComponentMapping } from '@spartacus/core';
import { CustomRoutingModule } from './custom-routing/custom-routing.module';
import { LocalizedRoutesConfig } from './localized-routes-config';
import { SeoModule } from './seo/seo.module';
import { ConfigDebuggerModule } from './config-debugger/config-debugger.module';
import { LogoutConfig } from './logout-config';
import { PlpModule } from './plp/plp.module';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { BannerModule } from './banner/banner.module';
import { CustomCartModule } from './custom-cart/custom-cart.module';
import { PdpModule } from './pdp/pdp.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    ConfigModule.withConfig({
      backend: {
        occ: {
          // baseUrl: 'http://localhost:3003',
          baseUrl: 'https://api.c39j2-walkersde1-d3-public.model-t.cc.commerce.ondemand.com',
          prefix: '/rest/v2/'
        }
      }
    } as OccConfig),
    B2cStorefrontModule.withConfig({
      context: {
        baseSite: ['electronics-spa']
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      features: {
        // level: '2.0',
        saveForLater: false
      },
    }),
    MyOutletsModule,
    BrowserTransferStateModule,
    CustomRoutingModule,
    ConfigModule.withConfig({
      isCovid: false
    }),
    ConfigDebuggerModule,
    ConfigModule.withConfig({
      logoutConfig: {
        logoutTimeout: 10000 // auto logout after 10 s of inactivity
      }
    } as LogoutConfig),
    PlpModule,
    CustomLayoutModule,
    // BannerModule,
    PageComponentModule,
    CustomCartModule,
    PdpModule,
    SeoModule,


  ],
  providers: [
    { provide: LogoutConfig, useExisting: Config }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
