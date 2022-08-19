import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE, Storage } from './storage';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { HandleError, HttpErrorHandlerService } from '../http/http-error-handler.service';
import { Auth } from '../entity/auth';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Token } from '@angular/compiler';
import { GlobalConstants } from '../global-constants';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'X-AUTH-LOG-HEADER': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  loginUrl = 'home/login'; 
  private handleError: HandleError;

  constructor(private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService ) {
      this.handleError = httpErrorHandler.createHandleError('AuthServiceService');
  }


  login(auth:Auth) : Observable<any>  {      
    const requestedUrl =   GlobalConstants.apiURL + 
      GlobalConstants.helpEndpoint + 
        this.loginUrl+"?password="+auth.password+"&username="+auth.name;          
    return this.http.get<Token>(requestedUrl)
    .pipe(
      catchError(this.handleError('login'))
    );
  }

  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
