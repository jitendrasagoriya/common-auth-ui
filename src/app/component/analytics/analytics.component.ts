import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/http/message.service';
import * as highchartsData from '../../shared/data/analytics.highchartsData';
import { DashboardService } from './dashboard.service';
import { Help, PageableResponce } from '../../entity/help'
import { Attendance } from 'src/app/entity/attendance';
import { DashBoardResponce, MonthlyStatistics } from 'src/app/entity/dashboard';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  helps: Help[] = [];
  attendances: Attendance[] = [];
  testVairable:string = "bg-primary"
  totalSalary!: number;
  dashBoard!: DashBoardResponce;
  totalHelpCount:number = 0;
  preset:number = 0;
  inproc:number = 0;
  absent:number = 0;
  dateObj = new Date();
  dayCount : number = 0;
  monthlyStatistics:MonthlyStatistics[] = [];
  


  constructor(private messageService: MessageService, private dashboardService: DashboardService) {
    
  }

  ngOnInit(): void {
    this.loadHelps();
    this.loadTodatAttendance(); 
    this.loadDashBoard();    
    this.dayCount = this.dateObj.getDate();
  }

  refreshHelps() {
    this.loadHelps();
  }

  loadHelps() {
    this.dashboardService.getHelps()
      .subscribe((pageableResponce) => {
        this.helps = pageableResponce.content;
        this.totalSalary = pageableResponce.content.reduce((amount: any, help: { salary: { valueOf: () => any; }; }) => amount += help.salary.valueOf(), 0);
      });
      
  }

  loadTodatAttendance() {
    this.dashboardService.getTodayHelpList()
      .subscribe((attendances) => { 
         attendances.forEach(( element: { bgClass: string; status: string; } ) => {
          element.bgClass = this.getClass(element.status);
         }); 
         this.attendances = attendances;
            
      });       
  }

  loadDashBoard() {
    this.monthlyStatistics = [];
    this.totalHelpCount = 0;
    this.dashboardService.getDashBoard()
      .subscribe((dash)=>{
          this.dashBoard = dash;
          this.dashBoard.helpsCurrentStatus.forEach(a=>{
            this.totalHelpCount = this.totalHelpCount + a.second;
            if(a.first == 'COMPLETED') {
              this.preset = a.second;
            } else if(a.first == 'INPROC') {
              this.inproc = a.second;
            }
            else if(a.first == 'NOTSTARTED'){
              this.absent = a.second;
            }
          });

          this.dashBoard.jsonMonthlyReport.forEach(m=>{
            const statistic = new MonthlyStatistics();
            let count:number = 0;
            let strSataus:string= '0';
            statistic.name = m.name;
            statistic.shift = m.time;            
            m.statusCount.forEach((status)=>{
              count = count + status.second;
              if(status.first =='TRUE'){
                strSataus = status.second.toString()
              }
            });
            strSataus = strSataus + '/'+count;
            statistic.statistis =strSataus;
            this.monthlyStatistics.push(statistic)
          });
      });
  }

  markPresent(attendance: Attendance) {
    console.log(attendance);
    this.dashboardService.markPresent(attendance)
      .subscribe(res=>{
        this.ngOnInit();
    });    
  }

  markComplete(attendance: Attendance) {
    console.log(attendance);
    this.dashboardService.markComplete(attendance)
      .subscribe(res=>{
        this.ngOnInit();
    });
  }

  getClass(request: string):string {
    let result = "primary";
    if(request === 'COMPLETED'){
      return  "success";
    } else if (request === 'NOTSTARTED'){
      return "danger";
    }
    else if (request === 'INPROC'){
      return "primary";
    } 
    return result;
  }

}
