import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../landing/redux/landing.reducers';
import { takeUntil } from 'rxjs/operators';
import { SignUpViewModel } from '../models/signup.models';
import { APP_NAME } from 'src/app/config/app.config';
import { UserService } from 'src/app/services/user/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcherHelper } from 'src/app/helpers/ui/errorstate.helper';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit, OnDestroy {
  // Data
  signUpModel: SignUpViewModel;
  appName: string = APP_NAME;
  isLoading = false;

  // UI
  hide = true;

  // Form group w props
  signUp = new FormGroup({
    userControl: new FormControl('', [
      Validators.required,
      Validators.maxLength(15),
      Validators.minLength(5),
      Validators.pattern('^[a-zA-Z0-9_.]+$')
    ]),
    emailControl: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    passControl: new FormControl('',  [
      Validators.required,
      Validators.maxLength(15),
      Validators.minLength(8),
      Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
    ]),
    nameControl: new FormControl('', [
      Validators.required,
      Validators.maxLength(15),
      Validators.minLength(1),
      Validators.pattern('^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$')
    ]),
    surnameControl: new FormControl('', [
      Validators.required,
      Validators.maxLength(25),
      Validators.minLength(1),
      Validators.pattern('^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$')
    ])
  });

  // Matchers
  userMatcher = new ErrorStateMatcherHelper();
  emailMatcher = new ErrorStateMatcherHelper();
  passwordMatcher = new ErrorStateMatcherHelper();
  nameMatcher = new ErrorStateMatcherHelper();
  surnameMatcher = new ErrorStateMatcherHelper();

  // Diposer
  disposer: Subject<void> = new Subject();

  constructor(private store: Store<AppState>, private userService: UserService) {
    this.signUpModel = {
      username: null,
      email: null,
      password: null,
      name: null,
      surname: null
    };

    this.store.select('signUpForm').pipe(takeUntil(this.disposer))
    .subscribe(state => {
      this.signUpModel.username = state.username;
      this.signUpModel.email = state.email;
    }, err => {
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.disposer.next();
    this.disposer.complete();
  }

  onRegister(): void {
    if (this.isLoading === false) {
      this.userService.Create(this.signUpModel);
      this.isLoading = true;
      setTimeout(() => {
        console.log(this.userService.GetAll());
        this.isLoading = false;
      }, 2000);
    }
  }

}
