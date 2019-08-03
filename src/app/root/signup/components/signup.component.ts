import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../landing/redux/landing.reducers';
import { takeUntil } from 'rxjs/operators';
import { SignUpViewModel } from '../models/signup.models';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit, OnDestroy {
  // Data
  signUpModel: SignUpViewModel;

  // Diposer
  disposer: Subject<void> = new Subject();

  constructor(private store: Store<AppState>) {
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

}
