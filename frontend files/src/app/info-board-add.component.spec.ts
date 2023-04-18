import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBoardAddComponent } from './info-board-add.component';

describe('InfoBoardAddComponent', () => {
  let component: InfoBoardAddComponent;
  let fixture: ComponentFixture<InfoBoardAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoBoardAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBoardAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
