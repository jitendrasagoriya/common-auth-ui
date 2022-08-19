import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { HelpsDetailsResponce } from 'src/app/entity/helpdeyailsresponce';
import { GlobalConstants } from 'src/app/global-constants';
import { HandleError, HttpErrorHandlerService } from 'src/app/http/http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-AUTH-LOG-HEADER': 'my-auth-token'
  })
};



@Injectable({
  providedIn: 'root'
})
export class ContactsService { 

  private handleError: HandleError;

  constructor(private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('ContactsService');
  }


  getHelpsDetails(): Observable<any> {
    const requestedUrl = GlobalConstants.apiURL + GlobalConstants.helpEndpoint;
    const httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER': localStorage.getItem("token") || '', 'Content-Type': 'application/json' }) };
    return this.http.get<HelpsDetailsResponce>(requestedUrl, httpOptions)
      .pipe(
        catchError(this.handleError('getHelps'))
      );
  }
}
