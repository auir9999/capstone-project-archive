import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiAddUnitComponent } from './multi-add-unit.component';

describe('MultiAddUnitComponent', () => {
  let component: MultiAddUnitComponent;
  let fixture: ComponentFixture<MultiAddUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiAddUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiAddUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
