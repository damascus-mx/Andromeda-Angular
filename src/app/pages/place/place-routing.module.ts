/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Place routing module
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceComponent } from './components/place.component';
import { PlaceRouting } from './place.routing';


const routes: Routes = [
  {
    path: '',
    component: PlaceComponent,
    children: PlaceRouting
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaceRoutingModule { }
