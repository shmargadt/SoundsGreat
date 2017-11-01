import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Sounds Great';


  public UsersTabs:Array<any> = [
          { TabName: 'Amitai', routerLink: "/user_activity"}, 
          { TabName: 'Ohad', routerLink: "/user_activity"}, 
          { TabName: 'Noam', routerLink: "/user_activity"}];
}
