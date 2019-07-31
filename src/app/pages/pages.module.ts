import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MaterialModule } from '../common/modules/material.module';
import { PagesComponent } from './root/pages.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { BottomNavigationComponent } from './shared/components/bottom-navigation/bottom-navigation.component';

@NgModule({
  declarations: [
    PagesComponent,
    NavigationComponent,
    BottomNavigationComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule
  ],
  providers: []
})
export class PagesModule { }
