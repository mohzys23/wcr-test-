import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { Application } from '@splinetool/runtime';
import { LoginComponent } from '../../login/login.component';
import { SignupComponent } from '../../signup/signup.component';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet, MatIconModule, NgClass, LoginComponent, SignupComponent, NgIf],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css',
  standalone: true,
})


export class AuthLayoutComponent implements OnInit {
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

  ngOnInit(): void {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const app = new Application(canvas);
    app.load('https://prod.spline.design/dsdsIbMwMNnRxDw5/scene.splinecode');
  }
}
