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
    this.twitterImage = meta.image;
    this.twitterTitle = meta.title;
  }

  protected set twitterImage(value: string) {
    this.addTag({ name: 'twitter:image', content: value });
  }

  protected set twitterTitle(value: string) {
    this.addTag({ name: 'twitter:title', content: value });
  }
}
