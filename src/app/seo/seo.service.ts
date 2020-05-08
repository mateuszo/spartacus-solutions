import { Injectable } from '@angular/core';
import { SeoMetaService } from '@spartacus/storefront';
import { PageRobotsMeta, PageMeta } from '@spartacus/core';

@Injectable({
  providedIn: 'root'
})
export class SeoService extends SeoMetaService {

  protected set meta(meta: PageMeta) {
    this.title = meta.title;
    this.description = meta.description;
    this.image = meta.image;
    this.robots = meta.robots || [PageRobotsMeta.INDEX, PageRobotsMeta.FOLLOW];
    this.customTag = 'hardcoded';
  }

  protected set customTag(value: string) {
    this.addTag({ name: 'customTag', content: value });
  }
}
