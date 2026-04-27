import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FeeMaintenanceTypeComponent } from '../fee-maintenance-type/fee-maintenance-type.component';

@Component({
  selector: 'app-compliance-reversal',
  standalone: true,
  imports: [CommonModule, FormsModule, FeeMaintenanceTypeComponent],
  templateUrl: './compliance-reversal.component.html',
  styleUrl: './compliance-reversal.component.scss',
})
export class ComplianceReversalComponent {
  remainingFeesThatCanBeReversed: number = 1900; // change to test: 0, -5, etc.

  // Example: user permissions from auth service
  userPermissions: string[] = ['View Fees', 'Compliance Fee Reversal'];

  // All possible Fee Maintenance Types
  allFeeMaintenanceTypes: string[] = [
    'DMP Fee Reversal Request',
    'DMP Fee Walver Request',
    'DMP Fee Hardship Cap Request',
    'Greenpath Case Reversal Request',
    'Compliance Fee Reversal Request',
  ];

  selectedFeeMaintenanceType: string | null = null;

  // Check if user has a specific permission
  hasPermission(permission: string): boolean {
    return this.userPermissions.includes(permission);
  }

  // Filter dropdown options based on business rules
  get feeMaintenanceTypes(): string[] {
    return this.allFeeMaintenanceTypes.filter((type) => {
      // Hide "Compliance Fee Reversal Request" if conditions not met
      if (type === 'Compliance Fee Reversal Request') {
        const canReverse =
          this.remainingFeesThatCanBeReversed > 0 &&
          this.hasPermission('Compliance Fee Reversal');
        return canReverse;
      }
      return true;
    });
  }

  // Optional: handler when dropdown changes
  onFeeMaintenanceTypeChange(value: string) {
    this.selectedFeeMaintenanceType = value;
    // Add additional logic if needed
  }
}
