import { Component, OnInit } from '@angular/core';
import { CartDetailsComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-custom-cart',
  templateUrl: './custom-cart.component.html',
  styleUrls: ['./custom-cart.component.scss']
})
export class CustomCartComponent extends CartDetailsComponent {

  onChange(entryNumber, event) {
    this.activeCartService.updateEntry(entryNumber, event.target.value);
  }

}
