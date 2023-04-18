import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiAddWeaponComponent } from './multi-add-weapon.component';

describe('MultiAddWeaponComponent', () => {
  let component: MultiAddWeaponComponent;
  let fixture: ComponentFixture<MultiAddWeaponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiAddWeaponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiAddWeaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
