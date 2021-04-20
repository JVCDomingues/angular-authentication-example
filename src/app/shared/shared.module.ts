import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';


import { HeaderComponent } from './header/header.component';
import { DialogComponent } from './dialog/dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    MessagesModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
