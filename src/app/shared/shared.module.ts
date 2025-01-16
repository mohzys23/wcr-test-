import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { AlertComponent } from './components/alert/alert.component';
import { ButtonSpinnerComponent } from './components/button-spinner/button-spinner.component';


@NgModule({
  declarations: [],
  imports: [CommonModule, AlertComponent, InputComponent, ButtonSpinnerComponent], // Import standalone component here
  exports: [AlertComponent, InputComponent, ButtonSpinnerComponent], // Export if needed elsewhere
})
export class SharedModule { }
