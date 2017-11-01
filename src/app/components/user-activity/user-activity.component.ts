import { Component, OnInit } from '@angular/core';
import { UserActivityActions } from './user-activity.actions';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-user-activity',
  templateUrl: './user-activity.component.html',
  styleUrls: ['./user-activity.component.scss']
})
export class UserActivityComponent  {

  title = 'User Activity';
  @select(state => state.userActivity.activities) readonly activities$: Observable<number>;

  constructor(private actions: UserActivityActions) {}

  public pieChartLabels:string[] = ['Mouse events', 'KeyBoard events'];
  public pieChartData:number[] = [300, 100];
  public pieChartType:string = 'pie';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
