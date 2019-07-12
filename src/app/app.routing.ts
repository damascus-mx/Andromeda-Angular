/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Andromeda's Lazy loading routing directory
 */
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./src/home/home.module').then(mod => mod.HomeModule)
    },
    {
        path: 'search',
        loadChildren: () => import('./src/browser/browser.module').then(mod => mod.BrowserModule)
    },
    {
        path: '404',
        loadChildren:  () => import('./src/shared/not-found/not-found.module').then(mod => mod.NotFoundModule)
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
