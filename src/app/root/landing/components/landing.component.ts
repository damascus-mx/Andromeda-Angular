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
import { APP_NAME, COMPANY_NAME, CURRENT_YEAR } from 'src/app/config/app.config';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faFacebook, faInstagram, faFacebookSquare, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Subject } from 'rxjs';
import { AppState } from '../redux/landing.reducers';
import { Store } from '@ngrx/store';
import { LandingViewModel } from '../models/landing.model';
import * as landingActions from '../redux/landing.actions';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcherHelper } from 'src/app/helpers/ui/errorstate.helper';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit, OnDestroy {
  // App data
  appName: string = APP_NAME;
  companyName: string = COMPANY_NAME;
  currentYear: number = CURRENT_YEAR;

  // UI
  isLoading = false;

  // Formgroup
  signUpGroup = new FormGroup({
    userFormControl: new FormControl('', [
      Validators.required,
      Validators.maxLength(15),
      Validators.minLength(5),
      Validators.pattern('^[a-zA-Z0-9_.]+$')
    ]),
    emailFormControl: new FormControl('', [
      Validators.required,
      Validators.email
    ])
  });

  // Username validator
  userMatcher = new ErrorStateMatcherHelper();

  // Email validator
  emailMatcher = new ErrorStateMatcherHelper();

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
    library.add(faGithub);
    library.add(faFacebookSquare);
    library.add(faGoogle);
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
