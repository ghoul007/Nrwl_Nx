import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as authActions from './auth.actions';
import { AuthState } from './auth.reducer';
import { DataPersistence } from '@nrwl/nx';
import { AuthService } from '@demo-workspace/auth/src/lib/services/auth.service';
import { map } from 'rxjs/operators'
@Injectable()
export class AuthEffects {

  @Effect()
  loadAuth$ = this.dataPersistence.fetch(authActions.AuthActionTypes.Login, {
    run: (action: authActions.LoginAction, state: AuthState) => {
      return this.authService.login().pipe(map(user => {
        return new authActions.LoginSuccessAction(user);
      }));
    },

    onError: (action: authActions.LoginAction, error) => {
      console.error('Error', error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<AuthState>,
    private authService: AuthService
  ) { }
}
