import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {
  // urlsToNotUse: Array<string>;
  // constructor(
  //   ) {
  
  //     this.urlsToNotUse= [
  //       '/HistoryCheck/historycheck/.+',
  //     ];
  //   }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    if (token) {
      // for (let address of this.urlsToNotUse) {
      //   req = req.clone({
      //     setHeaders: {},
      //   });
      // }
      req = req.clone({
        setHeaders: { Authotzation: `Bearer ${token}` },
      });
    }

    return next.handle(req);
  }
}
