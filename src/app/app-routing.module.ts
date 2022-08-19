import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth-guard';
import { ContentLayoutComponent } from './component/content-layout/content-layout.component';
import { FullLayoutComponent } from './component/full-layout/full-layout.component';
import { CONTENT_ROUTES } from './routes/content-layout.routes';
import { Full_ROUTES } from './routes/full-layout.routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/analytics',
    pathMatch: 'full',
  },
  { path: '', component: FullLayoutComponent, data: { title: 'full Views' }, children: Full_ROUTES,canActivate: [AuthGuard] },
  { path: '', component: ContentLayoutComponent, data: { title: 'content Views' }, children: CONTENT_ROUTES },
  { path: '**', redirectTo: 'dashboard/analytics' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
