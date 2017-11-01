import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter, routerReducer } from '@angular-redux/router';
import { RouterModule } from '@angular/router';

import { routes } from './routes';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component'

import { UsersActions } from './components/users/users.actions';
import { UserActivityActions } from './components/user-activity/user-activity.actions';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';

import { rootReducer } from './app.reducer'
import { IAppState, INITIAL_STATE } from './app.state'
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { UserActivityComponent } from './components/user-activity/user-activity.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserActivityComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule,  
    ChartsModule,
    NgReduxModule
  ],
  providers: [
    NgReduxRouter,
    UsersActions,
    UserActivityActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, private devTools: DevToolsExtension, ngReduxRouter: NgReduxRouter) {

    const storeEnhancers = this.devTools.isEnabled() ? [ this.devTools.enhancer() ] : [];

    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], storeEnhancers);

    ngReduxRouter.initialize();

  }
}
