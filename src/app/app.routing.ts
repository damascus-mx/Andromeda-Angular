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

const ROUTES: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(module => module.HomeModule)
    },
    {
        path: 'search',
        loadChildren: () => import('./pages/explorer/explorer.module').then(module => module.ExplorerModule)
    },
    {
        path: '404',
        loadChildren:  () => import('./pages/shared/not-found/not-found.module').then(module => module.NotFoundModule)
    },
    // Main
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    // Not found
    { path: '**', redirectTo: '404' }
];

export const AppRouting = RouterModule.forRoot(ROUTES, {useHash: false});
