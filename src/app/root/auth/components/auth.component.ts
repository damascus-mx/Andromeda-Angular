/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Auth component
 */

import { Component, OnInit } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationViewModel } from '../models/auth.model';
import { ErrorStateMatcherHelper } from 'src/app/helpers/ui/errorstate.helper';
import { APP_NAME } from 'src/app/config/app.config';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/domain/models/user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  // Two-Way model
  authModel: AuthenticationViewModel;
  user: User;

  // Form
  signInGroup = new FormGroup({
    userControl: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9\-_.\s@]+$')
    ]),
    passwordControl : new FormControl('', [
      Validators.required
    ])
  });

  userMatcher = new ErrorStateMatcherHelper();
  passwordMatcher = new ErrorStateMatcherHelper();

  // UI
  hide = true;
  isLoading = false;

  // App Data
  appName = APP_NAME;


  constructor(private router: Router, private userService: UserService) {
    this.authModel = new AuthenticationViewModel(null, null);
    this.addIcons();
  }

  ngOnInit(): void {
  }

  // Fontawesome icons
  addIcons(): void {
    library.add(faFacebookSquare);
    library.add(faGoogle);
  }

  onAuth(): void {
    if (this.isLoading === false) {
      if (this.userService.logIn(this.authModel.user, this.authModel.password)) {
        this.user = this.userService.getUser();
        console.log(`Logged as ${this.user.name} ${this.user.surname}`);
        this.router.navigate(['/']);
      } else {
        console.log('Auth failed');
      }

      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    }
  }

}
