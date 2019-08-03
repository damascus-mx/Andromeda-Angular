/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Andromeda's root Lazy loading routing directory
 */

import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/guards/auth.guard';

const ROUTES: Routes = [
    {
        path: 'not-found',
        loadChildren:  () => import('./pages/shared/pages/not-found/not-found.module').then(module => module.NotFoundModule)
    },
    // Register landing page
    {
        path: 'welcome',
        canActivate: [ AuthGuard ],
        loadChildren: () => import('./root/landing/landing.module').then(module => module.LandingModule)
    },
    // Sign Up
    {
        path: 'signup',
        canActivate: [ AuthGuard ],
        loadChildren: () => import('./root/signup/signup.module').then(module => module.SignupModule)
    },
    // Login - Auth
    {
        path: 'auth',
        canActivate: [ AuthGuard ],
        loadChildren: () => import('./root/auth/auth.module').then(module => module.AuthModule)
    },
    // Main
    {
        path: '',
        canActivate: [ AuthGuard ],
        loadChildren: () => import('./pages/pages.module').then(module => module.PagesModule)
    },
    // Not found
    { path: '**', redirectTo: '404', pathMatch: 'full' }
];

export const RootRouting = RouterModule.forRoot(ROUTES, {useHash: false});
