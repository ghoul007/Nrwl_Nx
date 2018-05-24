import { Component, OnInit } from '@angular/core';
import { AuthState } from '@demo-workspace/auth/src/lib/+state/auth.reducer';
import * as authActions from '@demo-workspace/auth/src/lib/+state/auth.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'demo-workspace-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<AuthState>) { }

  ngOnInit() {

  }

  login() {
    this.store.dispatch(new authActions.LoginAction())
  }

}
