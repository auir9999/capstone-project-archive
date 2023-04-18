import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBoardEditComponent } from './info-board-edit.component';

describe('InfoBoardEditComponent', () => {
  let component: InfoBoardEditComponent;
  let fixture: ComponentFixture<InfoBoardEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoBoardEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBoardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
