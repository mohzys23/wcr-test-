import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { AlertComponent } from './components/alert/alert.component';


@NgModule({
  declarations: [],
  imports: [CommonModule, AlertComponent, InputComponent], // Import standalone component here
  exports: [AlertComponent, InputComponent], // Export if needed elsewhere
})
export class SharedModule { }
