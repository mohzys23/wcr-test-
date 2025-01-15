import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { InputComponent } from '../components/shared/input/input.component';
import { FormControl } from '@angular/forms';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [MatButtonModule, MatIconModule, MatCardModule, InputComponent, MatPseudoCheckboxModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  emailControl = new FormControl("")
  passwordControl = new FormControl('');

  constructor(private http: HttpClient) {}


  onLogin (event: Event) {
    event.preventDefault();

    const userData = {
      email: this.emailControl.value,
      password: this.passwordControl.value,
    }

    this.http.post('http://localhost:3030/auth/login', userData, {
      headers: {
        'X-Api-Key': "I'M_A_FRONTEND_DEVELOPER_AND_I_WANT_TO_JOIN_THE_TEAM",
      }
    }).subscribe((response) => {
       console.log("login response:", response)
    })
  }
}
