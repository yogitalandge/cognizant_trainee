import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAsdfComponent } from './product-asdf.component';

describe('ProductAsdfComponent', () => {
  let component: ProductAsdfComponent;
  let fixture: ComponentFixture<ProductAsdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAsdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAsdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
