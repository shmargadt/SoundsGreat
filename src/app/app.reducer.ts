import { combineReducers, Reducer } from 'redux';
import { routerReducer } from '@angular-redux/router';

import { usersReducer } from './components/users/users.reducer';
import { userActivityrReducer } from './components/user-activity/user-activity.reducer';
import { IAppState } from './app.state'

export const rootReducer: Reducer<IAppState> = combineReducers<IAppState>({
  users: usersReducer,
  userActivity: userActivityrReducer,
  router: routerReducer,
});

