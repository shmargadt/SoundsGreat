import { Component, OnInit } from '@angular/core';
import { UserActivityActions } from './user-activity.actions';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http'

@Component({
  selector: 'app-user-activity',
  templateUrl: './user-activity.component.html',
  styleUrls: ['./user-activity.component.scss']
})
export class UserActivityComponent implements OnInit {
  results: string[];  
  title = 'User Activity';
  @select(state => state.userActivity.activities) readonly activities$: Observable<number>;

  constructor(private actions: UserActivityActions, private http: Http) {}

  public pieChartLabels:string[] = ['Mouse events', 'KeyBoard events'];
  public pieChartData:number[] = [300, 100];
  public pieChartType:string = 'pie';

  ngOnInit(): void {
    // Make the HTTP request:
    console.error('oninit');
    this.http.get('./keyboardevents.txt').subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data['results'];
      console.log(this.results);
    });
  }
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
