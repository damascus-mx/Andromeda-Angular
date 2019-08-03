import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../landing/redux/landing.reducers';
import { takeUntil } from 'rxjs/operators';
import { SignUpViewModel } from '../models/signup.models';
import { APP_NAME } from 'src/app/config/app.config';
import { UserService } from 'src/app/services/user/user.service';

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
