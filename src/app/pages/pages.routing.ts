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
            }
        ]
    }
];

export const APP_ROUTES = RouterModule.forChild(AppRouting);
