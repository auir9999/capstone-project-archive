import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollSimulatorComponent } from './roll-simulator.component';

describe('RollSimulatorComponent', () => {
  let component: RollSimulatorComponent;
  let fixture: ComponentFixture<RollSimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RollSimulatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RollSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
