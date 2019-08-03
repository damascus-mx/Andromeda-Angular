/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Sign Up - Register routes
 */

import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './components/signup.component';

const SignUpRouting: Routes = [
    {
        path: '',
        component: SignUpComponent
    }
];

export const SIGNUP_ROUTES = RouterModule.forChild(SignUpRouting);
