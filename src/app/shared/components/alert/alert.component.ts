import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [NgIf, NgClass],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css',
  standalone: true,
})

// alertType = 'success' || 'error' || 'warning';
export class AlertComponent {
  @Input() alertType: String = 'success';
  @Input() message: String = '';
}
