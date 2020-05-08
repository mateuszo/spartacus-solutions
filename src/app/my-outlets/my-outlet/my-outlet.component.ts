import { Component, OnInit, Inject } from '@angular/core';
import { CmsService, Config } from '@spartacus/core';

@Component({
  selector: 'app-my-outlet',
  templateUrl: './my-outlet.component.html',
  styleUrls: ['./my-outlet.component.scss']
})
export class MyOutletComponent implements OnInit {

  isCovid: boolean;


  constructor(@Inject(Config) config: any) {
    this.isCovid = config.isCovid;
  }

  ngOnInit(): void {
  }

}
