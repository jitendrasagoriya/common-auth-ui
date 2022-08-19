import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public sidebarservice: SidebarService,private router: Router) {
      if(localStorage.getItem("isLoggedIn") == "true") {
          this.jng_urs_nm = localStorage.getItem("userName");
      }else {
          this.jng_urs_nm = "Guest";
      }
   }

    jng_urs_nm:string|null;
        
    toggleSidebar() {
        this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
    }
    
    getSideBarState() {
        return this.sidebarservice.getSidebarState();
    }

    hideSidebar() {
        this.sidebarservice.setSidebarState(true);
    }

    logOut() {
        localStorage.clear;
        localStorage.setItem("isLoggedIn","false");
        this.router.navigate(['auth/sign-in'])
    }

    ngOnInit() {
        /* Search Bar */
        $(document).ready(function () {
            $(".mobile-search-icon").on("click", function () {
                $(".search-bar").addClass("full-search-bar")
            }), 
            $(".search-close").on("click", function () {
                $(".search-bar").removeClass("full-search-bar")
            })
        });

    }

}
