/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Profile component - Root routes
 */

import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile.component';

const ProfileRoutes: Routes = [
    {
        path: '',
        component: ProfileComponent
    }
];

export const PROFILE_ROUTES = RouterModule.forChild(ProfileRoutes);
