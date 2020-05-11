import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCartTotalComponent } from './my-cart-total.component';

describe('MyCartTotalComponent', () => {
  let component: MyCartTotalComponent;
  let fixture: ComponentFixture<MyCartTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCartTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCartTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
