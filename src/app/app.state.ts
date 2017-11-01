export interface IUsersState {
  names: string[]
}
export const INITIAL_STATE_USER = {
    names: []
}

export interface IUserActivityState {
  activities: any[]
}

export const INITIAL_USER_ACTIVITY = {
  activities: []
}

export interface IAppState {
  users: IUsersState;
  usersActivity: IUserActivityState;
  router?: any;
}
export const INITIAL_STATE: IAppState = {
  users: INITIAL_STATE_USER,
  usersActivity: INITIAL_USER_ACTIVITY
};
