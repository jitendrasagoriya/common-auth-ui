import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendanceComponent } from './attendance.component';
import { Time24to12FormatPipe } from 'src/app/pipe/time24to12-format.pipe';


@NgModule({
  declarations: [
    AttendanceComponent,
    Time24to12FormatPipe
  ],
  imports: [
    CommonModule,
    AttendanceRoutingModule
  ]
})
export class AttendanceModule { }
