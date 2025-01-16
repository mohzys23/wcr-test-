import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SharedModule } from '../shared/shared.module';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';
import { Application } from '@splinetool/runtime';

@Component({
  selector: 'app-signup',
  imports: [NgIf, MatProgressSpinner, MatButtonModule, MatIconModule, MatCardModule, MatPseudoCheckboxModule, MatButtonModule, SharedModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignupComponent implements OnInit {
  emailControl = new FormControl("")
  passwordControl = new FormControl('');
  repeatpasswordControl = new FormControl('');
  nameControl = new FormControl('');
  lastNameControl = new FormControl('');

  message = ""
  alertType = ""
  isLoading = false

  constructor(private http: HttpClient) { }


  onSubmit(event: Event) {
    event.preventDefault()
    this.isLoading = true


    const userData = {
      name: this.nameControl.value,
      lastname: this.lastNameControl.value,
      email: this.emailControl.value,
      password: this.passwordControl.value,
      repassword: this.repeatpasswordControl.value
    }


      this.http.post(`${environment.apiUrl}/auth/register`, userData, {
        headers: {
          'X-Api-Key': environment.apiKey
        }
      }).subscribe({
        next: (res: any) => {
          const response = res.message
          console.log('signup response:', res);
          this.alertType = "success"
          this.message = response
          this.isLoading = false
        },
        error: (err: any) => {
          console.log("err", err)
          this.alertType = "error"
          this.message = err?.error.message || 'An error occurred during signup.';
          this.isLoading = false
        }
      })


    // Hide the alert after 3 seconds
    setTimeout(() => {
      this.message = '';
    }, 3000);
  }

  ngOnInit(): void {
      const canvas = document.getElementById('canvas') as HTMLCanvasElement;
      const app = new Application(canvas);
      app.load('https://prod.spline.design/dsdsIbMwMNnRxDw5/scene.splinecode');
    }
}

