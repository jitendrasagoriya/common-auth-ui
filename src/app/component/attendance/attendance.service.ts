import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Attendance } from 'src/app/entity/attendance';
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
export class AttendanceService {

  private handleError: HandleError;

  constructor(private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('AddHelpsService');
  }


  getAllAttendanceForThisMonth():Observable<any> {
    const requestedUrl = GlobalConstants.apiURL + GlobalConstants.helpEndpoint +"attendance/monthly/";     
    const httpOptions = { headers: new HttpHeaders({ 'X-AUTH-LOG-HEADER': localStorage.getItem("token") || '', 'Content-Type': 'application/json' }) };
    return this.http.get<Attendance[]>(requestedUrl,httpOptions)
      .pipe(
        catchError(this.handleError('getAllAttendanceForThisMonth'))
      );
  }

}
