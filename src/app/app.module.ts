/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Andromeda's IoC lazyloaded-modules
 */
// Angular core required modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routing directory
import { AppRouting } from './app.routing';

// Misc
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUtils } from './utils/material.module';
import { NavigationComponent } from './src/shared/widgets/navigation/navigation.component';
import { BottomNavigationComponent } from './src/shared/widgets/bottom-navigation/bottom-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BottomNavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRouting,
    BrowserAnimationsModule,
    MaterialUtils
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
