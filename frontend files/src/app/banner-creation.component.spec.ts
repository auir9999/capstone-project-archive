import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCreationComponent } from './banner-creation.component';

describe('BannerCreationComponent', () => {
  let component: BannerCreationComponent;
  let fixture: ComponentFixture<BannerCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
