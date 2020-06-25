import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';

import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MyHttpLogInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Response interceptor');
    return next
      .handle(request)
      .pipe(
        tap((ev: HttpEvent<any>) => {
          if (ev instanceof HttpResponse) {
            console.log('processing response', ev);
          }
        })
      );
  }
}
