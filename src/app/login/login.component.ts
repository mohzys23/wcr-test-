import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { InputComponent } from '../components/shared/input/input.component';
import { FormControl } from '@angular/forms';
import { MatPseudoCheckboxModule } from '@angular/material/core';

@Component({
  selector: 'app-login',
  imports: [MatButtonModule, MatIconModule, MatCardModule, InputComponent, MatPseudoCheckboxModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  emailControl = new FormControl("")
  passwordControl = new FormControl('');
}
