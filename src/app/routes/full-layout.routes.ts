import { Routes } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'table',
        loadChildren: () => import('../table/table/table.module').then(m => m.TableModule)

    },
    {
        path: 'attendance',
        loadChildren: () => import('../component/attendance/attendance.module').then(m => m.AttendanceModule)

    },
     
];