import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AnalyticsComponent } from '../component/analytics/analytics.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'analytics',
        component: AnalyticsComponent,
        data: {
          title: 'Analytics'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
