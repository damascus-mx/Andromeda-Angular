/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Home routing module
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeferLoadModule } from '@trademe/ng-defer-load';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home.component';
import { MaterialUtils } from 'src/app/utils/material.module';
import { DialogPostComponent } from '../shared/widgets/dialog-post/dialog-post.component';
import { DialogPostService } from '../shared/widgets/dialog-post/dialog-post.service';


@NgModule({
  declarations: [
    HomeComponent,
    DialogPostComponent,
  ],
  entryComponents: [
    DialogPostComponent
  ],
  providers: [
    DialogPostService
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialUtils,
    DeferLoadModule
  ]
})
export class HomeModule { }
