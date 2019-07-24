import { Routes, RouterModule } from '@angular/router';

const AppRouting: Routes = [
    {
        path: 'home',
        loadChildren: () => import('src/app/pages/home/home.module').then(module => module.HomeModule)
    },
    {
        path: 'explore',
        loadChildren: () => import('src/app/pages/explorer/explorer.module').then(module => module.ExplorerModule)
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

export const APP_ROUTES = RouterModule.forChild(AppRouting);
