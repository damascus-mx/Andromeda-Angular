import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing.component';

const LandingRouting: Routes = [
    {
        path: '',
        component: LandingComponent
    }
];

export const LANDING_ROUTES = RouterModule.forChild(LandingRouting);
