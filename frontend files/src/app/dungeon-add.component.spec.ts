import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonAddComponent } from './dungeon-add.component';

describe('DungeonAddComponent', () => {
  let component: DungeonAddComponent;
  let fixture: ComponentFixture<DungeonAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DungeonAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DungeonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
