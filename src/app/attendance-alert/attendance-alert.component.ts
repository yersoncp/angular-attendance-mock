import { Component, OnInit } from '@angular/core';
import { TrackingService } from '../tracking.service';

@Component({
  selector: 'app-attendance-alert',
  templateUrl: './attendance-alert.component.html',
  styleUrls: ['./attendance-alert.component.css']
})
export class AttendanceAlertComponent implements OnInit {
  public isShow: boolean = false;
  public isSuccess: boolean = false;

  constructor(
    private trackingService: TrackingService
  ) { }

  ngOnInit() {
    this.trackingService.data$.subscribe(e => {
      this.isShow = e['active'];
      this.isSuccess = true;
      this._hiddenMessage();
      console.log(e);
    })
  }

  private _hiddenMessage() {
    setTimeout(_ => {
      this.isShow = false;
    }, 2000);
  }

}