import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplianceReversalComponent } from './compliance-reversal.component';

describe('ComplianceReversalComponent', () => {
  let component: ComplianceReversalComponent;
  let fixture: ComponentFixture<ComplianceReversalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplianceReversalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplianceReversalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
