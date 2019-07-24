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
import { AuthGuard } from './pages/auth/auth.guard';
import { PagesComponent } from './pages/root/pages.component';

const ROUTES: Routes = [
    {
        path: '404',
        loadChildren:  () => import('./pages/shared/pages/not-found/not-found.module').then(module => module.NotFoundModule)
    },
    // Main
    {
        path: '',
        component: PagesComponent,
        canActivate: [ AuthGuard ],
        loadChildren: () => import('./pages/pages.module').then(module => module.PagesModule)
    },
    // Not found
    { path: '**', redirectTo: '404', pathMatch: 'full' }
];

export const RootRouting = RouterModule.forRoot(ROUTES, {useHash: false});
