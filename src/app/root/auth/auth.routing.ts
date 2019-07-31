import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth.component';

const AuthRouting: Routes = [
    {
        path: '',
        component: AuthComponent
    }
];

export const AUTH_ROUTES = RouterModule.forChild(AuthRouting);
