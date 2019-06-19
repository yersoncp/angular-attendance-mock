import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AttendanceRegisterComponent } from './attendance-register/attendance-register.component';
import { AttendanceAlertComponent } from './attendance-alert/attendance-alert.component';
import { TrackingService } from './tracking.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AttendanceRegisterComponent, AttendanceAlertComponent ],
  bootstrap:    [ AppComponent ],
  providers: [TrackingService]
})
export class AppModule { }
