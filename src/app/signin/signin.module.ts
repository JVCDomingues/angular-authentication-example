import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SigninComponent } from './signin.component';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { MessagesModule } from 'primeng/messages';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CardModule,
    ButtonModule,
    InputTextModule,
    MessagesModule,
    FormsModule,
    ReactiveFormsModule,
    PanelModule,
    RouterModule,
    CommonModule
  ],
  exports: [],
  declarations: [SigninComponent],
  providers: [],
})
export class SigninModule { }
