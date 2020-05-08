import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOutletComponent } from './my-outlet.component';

describe('MyOutletComponent', () => {
  let component: MyOutletComponent;
  let fixture: ComponentFixture<MyOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
