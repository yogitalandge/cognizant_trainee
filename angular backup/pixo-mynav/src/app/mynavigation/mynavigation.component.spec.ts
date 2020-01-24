import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MynavigationComponent } from './mynavigation.component';

describe('MynavigationComponent', () => {
  let component: MynavigationComponent;
  let fixture: ComponentFixture<MynavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MynavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MynavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
