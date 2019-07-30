/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Place module
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceRoutingModule } from './place-routing.module';
import { PlaceComponent } from './components/place.component';


@NgModule({
  declarations: [PlaceComponent],
  imports: [
    CommonModule,
    PlaceRoutingModule
  ]
})
export class PlaceModule { }
