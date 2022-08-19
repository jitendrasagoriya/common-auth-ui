import { Component, OnInit } from '@angular/core';
import { Attendance } from 'src/app/entity/attendance';
import { AttendanceService } from './attendance.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {


  attendances:Attendance[] = [];

  constructor(private service:AttendanceService) { }

  ngOnInit(): void {
    this.loadAttendance();
  }


  loadAttendance() {
    this.service.getAllAttendanceForThisMonth()
      .subscribe(result=>{
        this.attendances = result;
      });
  }


}
