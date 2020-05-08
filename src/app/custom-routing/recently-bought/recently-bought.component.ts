import { Component, OnInit } from '@angular/core';
import { RecentlyBoughtService } from 'src/app/recently-bought.service';
import { Observable } from 'rxjs';
import { Product } from '@spartacus/core';

@Component({
  selector: 'app-recently-bought',
  templateUrl: './recently-bought.component.html',
  styleUrls: ['./recently-bought.component.scss']
})
export class RecentlyBoughtComponent implements OnInit {

  recentlyBougth$: Observable<Product[]> = this.recentlyBoughtService.getRecentlyBought();

  constructor(private recentlyBoughtService: RecentlyBoughtService) { }

  ngOnInit(): void {
  }

}
