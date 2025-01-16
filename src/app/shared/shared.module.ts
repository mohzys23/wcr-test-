import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { AlertComponent } from './components/alert/alert.component';
import { ButtonSpinnerComponent } from './components/button-spinner/button-spinner.component';


@NgModule({
  declarations: [],
  imports: [CommonModule, AlertComponent, ButtonComponent, InputComponent, ButtonSpinnerComponent], // Import standalone component here
  exports: [AlertComponent, ButtonComponent, InputComponent, ButtonSpinnerComponent], // Export if needed elsewhere
})
export class SharedModule { }
