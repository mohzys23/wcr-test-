import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { InputComponent } from '../components/shared/input/input.component';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {}


  onSubmit(event: Event) {
    event.preventDefault()


    const userData = {
      name: this.nameControl.value,
      lastname: this.lastNameControl.value,
      email: this.emailControl.value,
      password: this.passwordControl.value,
      repassword: this.repeatpasswordControl.value
    }


    this.http.post("http://localhost:3030/auth/register", userData, {
      headers: {
        'X-Api-Key': "I'M_A_FRONTEND_DEVELOPER_AND_I_WANT_TO_JOIN_THE_TEAM",
      }
}).subscribe((response) => {
      console.log('signup response:', response);
    })
  }
}

