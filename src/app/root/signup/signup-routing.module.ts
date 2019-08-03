/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Sign Up - Register routing module
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SIGNUP_ROUTES } from './signup.routing';

@NgModule({
  imports: [SIGNUP_ROUTES],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
