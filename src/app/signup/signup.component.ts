import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { InputComponent } from '../components/shared/input/input.component';

@Component({
  selector: 'app-signup',
  imports: [MatButtonModule, MatIconModule, MatCardModule, InputComponent, MatPseudoCheckboxModule, MatButtonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignupComponent {
  emailControl = new FormControl("")
  passwordControl = new FormControl('');
  repeatpasswordControl = new FormControl('');
  nameControl = new FormControl('');
  lastNameControl = new FormControl('');
}

