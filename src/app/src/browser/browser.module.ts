/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Browser routing module
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { BrowserRoutingModule } from './browser-routing.module';
import { BrowserComponent } from './components/browser.component';
import { MaterialUtils } from 'src/app/utils/material.module';


@NgModule({
  declarations: [BrowserComponent],
  imports: [
    CommonModule,
    BrowserRoutingModule,
    MaterialUtils,
    ScrollingModule
  ]
})
export class BrowserModule { }
