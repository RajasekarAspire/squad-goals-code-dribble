import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComplianceReversalComponent } from './features/components/compliance-reversal/compliance-reversal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComplianceReversalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
