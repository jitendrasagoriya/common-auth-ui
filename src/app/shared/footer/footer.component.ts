import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'; 

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

  ngOnInit() {
    /* Back To Top */

     $(document).ready(function(){ 
         $(window).on("scroll", function(){ 
             if ($(this)!=undefined ) { 
                 if($(this).scrollTop()) {
                     $('.back-to-top').fadeIn(); 
                 }else {
                    $('.back-to-top').fadeOut(); 
                 }
             } else { 
                 $('.back-to-top').fadeOut(); 
             } 
         }); 

         $('.back-to-top').on("click", function(){ 
             $("html, body").animate({ scrollTop: 0 }, 600); 
             return false; 
         }); 
     });	   
         
 }

}
