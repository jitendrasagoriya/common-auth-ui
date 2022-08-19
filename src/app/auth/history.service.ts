import { Injectable } from '@angular/core';
import {Event,  Router, NavigationEnd } from '@angular/router'; 

 

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private urls: string[] = [];

  constructor(public router: Router) {  
      router.events.subscribe( (event: Event) => {     
        if (event instanceof NavigationEnd   ) {
          const url = event.urlAfterRedirects;
          this.urls = [...this.urls, url];           
        } 
    });
  }

  public getPreviousUrl(): string {
    const length = this.urls.length;
    return length > 1 ? this.urls[length - 2] : '/';
  }

  public getLastNonLoginUrl(): string {
    const exclude: string[] = ['/register', '/login'];
    const filtered = this.urls.filter(url => !exclude.includes(url));
    const length = filtered.length;
    return length > 1 ? filtered[length -1]:'/';
  }
  
  
}
