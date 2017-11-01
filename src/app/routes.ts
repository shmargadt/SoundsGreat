import { UsersComponent } from './components/users/users.component';
import { UserActivityComponent } from './components/user-activity/user-activity.component';


export const routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'user_activity', component: UserActivityComponent },
];
