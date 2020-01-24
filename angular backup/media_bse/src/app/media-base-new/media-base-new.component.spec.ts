import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaBaseNewComponent } from './media-base-new.component';

describe('MediaBaseNewComponent', () => {
  let component: MediaBaseNewComponent;
  let fixture: ComponentFixture<MediaBaseNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaBaseNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaBaseNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
