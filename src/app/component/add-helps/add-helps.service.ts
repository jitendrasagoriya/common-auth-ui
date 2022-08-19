import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { HelpCreateRequest } from 'src/app/entity/helpcreaterequest';
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
export class AddHelpsService {

  private handleError: HandleError;

  constructor(private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('AddHelpsService');
  }

  createNewHelp(requestBody:HelpCreateRequest): Observable<any> {
    const requestedUrl = GlobalConstants.apiURL + GlobalConstants.helpEndpoint;     
    const httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER': localStorage.getItem("token") || '', 'Content-Type': 'application/json' }) };
    return this.http.post<HelpCreateRequest>(requestedUrl,requestBody, httpOptions)
      .pipe(
        catchError(this.handleError('createNewHelp'))
      );
  }

}
