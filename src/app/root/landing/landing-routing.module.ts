import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LANDING_ROUTES } from './landing.routing';

@NgModule({
  imports: [LANDING_ROUTES],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
