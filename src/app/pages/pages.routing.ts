/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Page component - Root routes
 */

import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './root/pages.component';

const AppRouting: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                loadChildren: () => import('src/app/pages/home/home.module').then(module => module.HomeModule)
            },
            {
                path: 'explore',
                loadChildren: () => import('src/app/pages/explorer/explorer.module').then(module => module.ExplorerModule)
            },
            {
                path: 'place/:id',
                loadChildren: () => import('src/app/pages/place/place.module').then(module => module.PlaceModule)
            },
            {
                path: 'user',
                loadChildren: () => import('src/app/pages/profile/profile.module').then(module => module.ProfileModule)
            },
            {
                path: 'user/:username',
                loadChildren: () => import('src/app/pages/profile/profile.module').then(module => module.ProfileModule)
            },
            {
                path: '404',
                loadChildren:  () => import('../pages/shared/pages/not-found/not-found.module').then(module => module.NotFoundModule)
            }
        ]
    },
    // Not found
    { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];

export const APP_ROUTES = RouterModule.forChild(AppRouting);
