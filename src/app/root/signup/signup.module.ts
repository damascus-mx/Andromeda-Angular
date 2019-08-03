/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Sign Up - Register module
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignUpComponent } from './components/signup.component';


@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    SignupRoutingModule,
  ]
})
export class SignupModule { }
