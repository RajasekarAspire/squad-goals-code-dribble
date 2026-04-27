import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fee-maintenance-type',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fee-maintenance-type.component.html',
  styleUrl: './fee-maintenance-type.component.scss',
})
export class FeeMaintenanceTypeComponent {
  reversalMonth: string | null = null; // bound to month picker
  reversalAmount: number | null = null; // bound to dollar amount
  reversalReason: string = ''; // bound to notes (max 500 chars)

  months!: {
    label: string;
    value: string;
    disabled: boolean;
    isFuture: boolean;
  }[]; // prefiltered by first/last paid and reversed months
  fromMonth!: string | null;
  toMonth!: string | null;

  // prevents selecting future months
  currentMonth: string = this.getCurrentMonth();

  estimatedReversalAmount = 0; // computed based on range + DMP fee
  remainingFeesThatCanBeReversed = 0;
  getCurrentMonth(): string {
    const now = new Date();
    return `${now.getFullYear()}-${(now.getMonth() + 1)
      .toString()
      .padStart(2, '0')}`;
  }
}
