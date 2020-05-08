import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoMetaService, JsonLdBuilderModule } from '@spartacus/storefront';
import { SeoService } from './seo.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    JsonLdBuilderModule
  ],
  providers: [
    { provide: SeoMetaService, useClass: SeoService }
  ]
})
export class SeoModule { }
