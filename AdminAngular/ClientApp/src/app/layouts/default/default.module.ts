import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { CounterComponent } from '../../counter/counter.component';
import { FetchDataComponent } from '../../fetch-data/fetch-data.component';
import { NavMenuComponent } from '../../nav-menu/nav-menu.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    NavMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule
  ]
})
export class DefaultModule { }
