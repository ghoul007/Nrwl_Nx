import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authReducer, initialState as authInitialState } from './+state/auth.reducer';
import { AuthEffects } from './+state/auth.effects';
import { LoginComponent } from './containers/login/login.component';
import { AuthService} from './services/auth.service';
import { LoginFormComponent } from './containers/login-form/login-form.component'
@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {path: '',  component: LoginComponent}  
    ]),

    StoreModule.forFeature('auth', authReducer, { initialState: authInitialState }),

    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [AuthEffects, AuthService],
  declarations: [ LoginComponent, LoginFormComponent]
})
export class AuthModule {}
