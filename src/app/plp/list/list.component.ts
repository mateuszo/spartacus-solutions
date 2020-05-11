import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends ProductListComponent implements OnInit {


}
