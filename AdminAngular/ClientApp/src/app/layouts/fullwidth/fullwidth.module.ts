import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullwidthComponent } from './fullwidth.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../../login/login.component';
import { NavMenuComponent } from '../../nav-menu/nav-menu.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    FullwidthComponent,
    LoginComponent,
    //NavMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule
  ]
})
export class FullwidthModule { }
