/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Andromeda's root IoC lazyloaded-modules
 */

// Angular core required modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routing directory
import { RootRouting } from './app.routing';

// Misc
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Services
import { UserService } from './services/user/user.service';
import { CookieService } from 'ngx-cookie-service';

// Redux
import { StoreModule } from '@ngrx/store';
import { landingReducer } from './root/landing/redux/landing.reducer';
import { environment } from 'src/environments/environment.prod';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RootRouting,
    BrowserAnimationsModule,
    StoreModule.forRoot({signUpForm: landingReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [UserService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
