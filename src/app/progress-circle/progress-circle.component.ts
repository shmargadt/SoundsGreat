import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.scss']
})
export class ProgressCircleComponent implements OnInit {
  @Input() progress;
  @Input() color;
  constructor() { }

  ngOnInit() {

  }
  gerProgress() {
    return 'p' + this.progress;
  }
}
