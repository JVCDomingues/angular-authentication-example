import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { MessagesModule } from 'primeng/messages';

import { SignupComponent } from './signup.component';

@NgModule({
  imports: [
    ButtonModule,
    InputTextModule,
    PanelModule,
    ReactiveFormsModule,
    FormsModule,
    MessagesModule,
    CommonModule
  ],
  exports: [],
  declarations: [SignupComponent],
  providers: [],
})
export class SignupModule { }
