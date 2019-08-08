/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Profile component - Root routing module
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PROFILE_ROUTES } from './profile.routing';

@NgModule({
  imports: [PROFILE_ROUTES],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
