import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  imports: [MatButtonModule, MatIconModule, CommonModule],
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() buttonType: string = ''; // Default Material button type
  @Input() icon: string = ''; // Icon name for Material Icon
  @Input() ariaLabel: string = ''; // ARIA label for accessibility
  @Input() buttonClass: string = ''; // Additional CSS classes
  @Input() text: string = ''; // Button text
  @Input() isDisabled: boolean = false; // Button is enabled by default
  @Output() onClick = new EventEmitter<void>(); // Emit click events

  handleClick() {
    if (!this.isDisabled) {
      this.onClick.emit();
    }
  }
}
