/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Not Found module
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './components/not-found.component';


@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    NotFoundRoutingModule
  ]
})
export class NotFoundModule { }
