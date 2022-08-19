import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { PageableResponce } from 'src/app/entity/help';
import { GlobalConstants } from 'src/app/global-constants';
import { HandleError, HttpErrorHandlerService } from 'src/app/http/http-error-handler.service';
import { Attendance } from 'src/app/entity/attendance';
import { DashBoardResponce } from 'src/app/entity/dashboard'
 


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-AUTH-LOG-HEADER': 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private handleError: HandleError;

  constructor(private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('DashboardService');
  }

  getHelps(): Observable<any> {
    const requestedUrl = GlobalConstants.apiURL + GlobalConstants.helpEndpoint;
    const httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER': localStorage.getItem("token") || '', 'Content-Type': 'application/json' }) };
    return this.http.get<PageableResponce>(requestedUrl, httpOptions)
      .pipe(
        catchError(this.handleError('getHelps'))
      );
  }


  getTodayHelpList(): Observable<any> {
    const requestedUrl = GlobalConstants.apiURL + GlobalConstants.helpEndpoint + "attendance/today/";     
    const httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER': localStorage.getItem("token") || '', 'Content-Type': 'application/json' }) };
    return this.http.post<Attendance[]>(requestedUrl,null, httpOptions)
      .pipe(
        catchError(this.handleError('getTodayHelpList'))
      );
  }

  getDashBoard(): Observable<any> {
    const requestedUrl = GlobalConstants.apiURL + GlobalConstants.helpEndpoint + "attendance/dashboard/";
    const httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER': localStorage.getItem("token") || '', 'Content-Type': 'application/json' }) };
    return this.http.get<DashBoardResponce>(requestedUrl,httpOptions)
      .pipe(
        catchError(this.handleError('getDashBoard'))
      );
  }

  markPresent(attendance: Attendance): Observable<any> {
    const requestedUrl = GlobalConstants.apiURL + GlobalConstants.helpEndpoint + "attendance/"+attendance.homeHelpId+"/shift/"+attendance.shiftId+"/present";
    const httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER': localStorage.getItem("token") || '', 'Content-Type': 'application/json' }) };
    return this.http.post<Attendance[]>(requestedUrl,null, httpOptions)
      .pipe(
        catchError(this.handleError('martPresent'))
      );
  }

  markComplete(attendance: Attendance): Observable<any> {
    const requestedUrl = GlobalConstants.apiURL + GlobalConstants.helpEndpoint + "attendance/"+attendance.homeHelpId+"/shift/"+attendance.shiftId+"/complete";
    const httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER': localStorage.getItem("token") || '', 'Content-Type': 'application/json' }) };
    return this.http.post<Attendance[]>(requestedUrl,null, httpOptions)
      .pipe(
        catchError(this.handleError('martComplete'))
      );
  }
}
