import { Action } from 'redux';
import { IUserActivityState } from '../../app.state'
import { IUserActivityActions , UserActivityActions} from './user-activity.actions';

export function userActivityrReducer(lastState: IUserActivityState, action: IUserActivityActions): IUserActivityState {
  if (lastState === undefined) { return {activities: []}}
  console.log('userActivityrReducer ? ', userActivityrReducer);
  switch (action.type) {
    case UserActivityActions.FETCH_USER_ACTIVITY:  return {
      activities: action.activities
    };
  }
  return lastState;
}
