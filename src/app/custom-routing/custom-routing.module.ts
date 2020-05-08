import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule, RoutingConfig, UrlModule } from '@spartacus/core';
import { RecentlyBoughtComponent } from './recently-bought/recently-bought.component';
import { Routes, RouterModule } from '@angular/router';
import { CmsPageGuard, ProductListModule } from '@spartacus/storefront';

const routes: Routes = [
  { path: 'recently-bought', component: RecentlyBoughtComponent, canActivate: [CmsPageGuard], data: { pageLabel: 'recently-bought' } }
];


@NgModule({
  declarations: [RecentlyBoughtComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UrlModule,
    ProductListModule,
    ConfigModule.withConfig({
      routing: {
        routes: {
          product: {
            paths: ['prod/:name/:productCode', 'produkten/:productCode']
          }
        }
      }
    } as RoutingConfig)
  ]
})
export class CustomRoutingModule { }
