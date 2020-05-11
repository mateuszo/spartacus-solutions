import { Component, OnInit } from '@angular/core';
import { CartTotalsComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-my-cart-total',
  templateUrl: './my-cart-total.component.html',
  styleUrls: ['./my-cart-total.component.scss']
})
export class MyCartTotalComponent extends CartTotalsComponent implements OnInit {


}
