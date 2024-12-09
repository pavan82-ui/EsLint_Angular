import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareBComponent } from './share-b.component';

describe('ShareBComponent', () => {
  let component: ShareBComponent;
  let fixture: ComponentFixture<ShareBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
