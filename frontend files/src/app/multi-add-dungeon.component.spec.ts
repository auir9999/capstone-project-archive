import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiAddDungeonComponent } from './multi-add-dungeon.component';

describe('MultiAddDungeonComponent', () => {
  let component: MultiAddDungeonComponent;
  let fixture: ComponentFixture<MultiAddDungeonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiAddDungeonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiAddDungeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
