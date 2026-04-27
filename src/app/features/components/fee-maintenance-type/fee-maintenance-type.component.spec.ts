import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeMaintenanceTypeComponent } from './fee-maintenance-type.component';

describe('FeeMaintenanceTypeComponent', () => {
  let component: FeeMaintenanceTypeComponent;
  let fixture: ComponentFixture<FeeMaintenanceTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeeMaintenanceTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeeMaintenanceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
