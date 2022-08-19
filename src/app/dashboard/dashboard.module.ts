import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AnalyticsComponent } from '../component/analytics/analytics.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { HighchartsChartModule } from 'highcharts-angular';



@NgModule({
  declarations: [ 
    AnalyticsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PerfectScrollbarModule,
    HighchartsChartModule

  ]
})
export class DashboardModule { }
