import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';


@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonComponent, InputComponent], // Import standalone component here
  exports: [ButtonComponent, InputComponent], // Export if needed elsewhere
})
export class SharedModule { }
