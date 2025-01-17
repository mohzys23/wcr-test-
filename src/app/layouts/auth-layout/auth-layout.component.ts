import { NgClass, NgIf } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from '../../login/login.component';
import { SignupComponent } from '../../signup/signup.component';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet, MatIconModule, NgClass, LoginComponent, SignupComponent, NgIf],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
})


export class AuthLayoutComponent {
  activeLogin = "loginActive"
  activeSignup = ""

  swicthTabLogin = (value: any) => {
    this.activeLogin = value
    this.activeSignup = ""
  }

  swicthTabSignup = (value: any) => {
    this.activeSignup = value
    this.activeLogin = ""
  }
}
