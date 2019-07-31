/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Auth component routes
 */

import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth.component';

const AuthRouting: Routes = [
    {
        path: '',
        component: AuthComponent
    }
];

export const AUTH_ROUTES = RouterModule.forChild(AuthRouting);
