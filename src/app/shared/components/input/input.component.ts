import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() control!: FormControl;
  @Input() required: boolean = false;
  @Input() errorMessages: { [key: string]: string } = {};
}
