import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Help } from 'src/app/entity/help';
import { HelpCreateRequest } from 'src/app/entity/helpcreaterequest';
import { GlobalConstants } from 'src/app/global-constants';
import { HandleError, HttpErrorHandlerService } from 'src/app/http/http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class EditHelpsService {

  private handleError: HandleError;
  

  constructor(private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('AddHelpsService');
  }

  loadHelpsById(is:number):Observable<any> {
    const requestedUrl = GlobalConstants.apiURL + GlobalConstants.helpEndpoint+"id/"+is;     
    const httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER': localStorage.getItem("token") || '', 'Content-Type': 'application/json' }) };
    return this.http.get<Help>(requestedUrl,httpOptions)
      .pipe(
        catchError(this.handleError('loadHelpsById'))
      );
  }

  updateHelp(requestBody:HelpCreateRequest): Observable<any> {
    const requestedUrl = GlobalConstants.apiURL + GlobalConstants.helpEndpoint;     
    const httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER': localStorage.getItem("token") || '', 'Content-Type': 'application/json' }) };
    return this.http.put<HelpCreateRequest>(requestedUrl,requestBody, httpOptions)
      .pipe(
        catchError(this.handleError('createNewHelp'))
      );
  }

}
