import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component'; 
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';



@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent, 
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    PerfectScrollbarModule
    
  ],
  exports :[
    CommonModule,
    FooterComponent,
    NavbarComponent, 
    SidebarComponent,
    NgbModule
  ]
})
export class SharedModule { }
