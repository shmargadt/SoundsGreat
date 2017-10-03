import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { CounterActions } from './counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [CounterActions]
})
export class CounterComponent {
  title = 'User Activity';
  @select(state => state.counter.count) readonly count$: Observable<number>;

  constructor(private actions: CounterActions) {}

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
