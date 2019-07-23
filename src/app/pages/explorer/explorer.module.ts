/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Explorer routing module
 */
import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { ExplorerRoutingModule } from './explorer-routing.module';
import { ExplorerComponent } from './components/explorer.component';
import { MaterialModule } from 'src/app/common/modules/material.module';


@NgModule({
  declarations: [ExplorerComponent],
  imports: [
    ExplorerRoutingModule,
    MaterialModule,
    ScrollingModule
  ]
})
export class ExplorerModule { }
