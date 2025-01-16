import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormControl } from '@angular/forms';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SharedModule } from "../shared/shared.module";
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';
import { Application } from '@splinetool/runtime';



@Component({
  selector: 'app-login',
  imports: [NgIf, MatProgressSpinner, MatButtonModule, MatIconModule, MatCardModule, MatPseudoCheckboxModule, MatButtonModule, SharedModule],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrl: './login.component.css'
})


export class LoginComponent {
  emailControl = new FormControl("")
  passwordControl = new FormControl('');

  alertType = ""
  message = ""
  isLoading = false

  constructor(private http: HttpClient) { }


  onLogin(event: Event) {
    event.preventDefault();
    this.isLoading = true

    const userData = {
      email: this.emailControl.value,
      password: this.passwordControl.value,
    }


    this.http.post(`${environment.apiUrl}/auth/login`, userData, {
      headers: {
        'X-Api-Key': environment.apiKey,
      }
    }).subscribe({
      next: (res: any) => {
        const response = res.message
        this.alertType = "success"
        this.message = response
        console.log("login res:", res)
        this.isLoading = false
      },
      error: (err: any) => {
        console.log("err", err)
        this.alertType = "error"
        this.message = err?.error.message || 'An error occurred during login.'
        this.isLoading = false
      },
    })


    // Hide the alert after 3 seconds
    setTimeout(() => {
      this.message = '';
    }, 3000);
  }
}



