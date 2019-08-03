/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Landing - Register component
 */

import { Component, OnInit, OnDestroy } from '@angular/core';
import { APP_NAME } from 'src/app/config/app.config';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Subject } from 'rxjs';
import { AppState } from '../redux/landing.reducers';
import { Store } from '@ngrx/store';
import { LandingViewModel } from '../models/landing.model';
import * as landingActions from '../redux/landing.actions';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit, OnDestroy {
  // App name
  appName: string = APP_NAME;
  isLoading = false;

  // Data
  signUpRedux: LandingViewModel;
  signUpModel: LandingViewModel;

  // Disposer
  disposer: Subject<void> = new Subject();

  constructor(private store: Store<AppState>, private router: Router) {
    this.store.select('signUpForm').pipe(takeUntil(this.disposer))
    .subscribe(state => {
      this.signUpRedux = state;
    }, err => {
      console.log(err);
    });

    this.signUpModel = {
      username: null,
      email: null
    };
  }

  ngOnInit(): void {
    this.addIcons();
  }

  ngOnDestroy(): void {
    this.disposer.next();
    this.disposer.complete();
  }

  // Fontawesome icons
  addIcons(): void {
    library.add(faTwitter);
    library.add(faFacebook);
    library.add(faInstagram);
  }

  onRegister(): void {
    if ( this.signUpModel != null && this.signUpModel.email && this.signUpModel.username ) {
      const setUsername = new landingActions.SetUsernameAction(this.signUpModel.username);
      const setEmail = new landingActions.SetEmailAction(this.signUpModel.email);

      this.store.dispatch(setUsername);
      this.store.dispatch(setEmail);

      this.router.navigate(['/signup']);
    }

    /*if (this.isLoading === false) {
      console.log('Requesting data...');
      this.isLoading = true;
      setTimeout(() => {
        console.log(this.signUpModel);


        this.isLoading = false;
      }, 2000);
    }*/
  }

}
