import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBoardDetailComponent } from './info-board-detail.component';

describe('InfoBoardDetailComponent', () => {
  let component: InfoBoardDetailComponent;
  let fixture: ComponentFixture<InfoBoardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoBoardDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBoardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
