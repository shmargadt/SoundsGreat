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
  public lineChartData: Array<any> = [
    { data: [10500, 13600, 11000, 8000, 10000], label: 'Keyboard events' },
    { data: [30000, 32000, 22000, 25000,28000], label: 'Mouse events' }
  ];

  public lineChartLabels: Array<any> = ['No Music','Rap', 'Chillout', 'POP', 'Electronic'];
  public lineChartOptions: any = {
    responsive: false, 
    scales:{
        xAxes: [{
            stacked: true
        }],
        yAxes: [{
        stacked: true
        }]
    }
  };

  public lineChartColors: Array<any> = [
    { // keyboard
      backgroundColor: '#1481CF',
      borderColor: '#0B2535',
      pointBackgroundColor: '#1481CF',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: '#0F2937',
      borderColor: '#770a0ab',
      pointBackgroundColor: '#F72825',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  public randomize(): void {
    let _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
