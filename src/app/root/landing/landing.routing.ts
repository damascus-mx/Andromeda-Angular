/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Landing - Register routes
 */

import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing.component';

const LandingRouting: Routes = [
    {
        path: '',
        component: LandingComponent
    }
];

export const LANDING_ROUTES = RouterModule.forChild(LandingRouting);
