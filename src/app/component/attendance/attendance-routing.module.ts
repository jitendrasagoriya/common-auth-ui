import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './attendance.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'view',
        component: AttendanceComponent,
        data: {
          title: 'View Helps'
        }
      }, 
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }
