import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import * as players from '../../assets/mocks/players.json';

const urls = [
  {
    url: 'localhost:8080/api/fake/players',
    json: players
  }
];

@Injectable()
export class HttpMockRequestInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Any url' + request.url);

    for (const element of urls) {
      if (request.url === element.url) {
        console.log('Loaded from json : ' + request.url);
        return of(new HttpResponse({status: 200, body: ((element.json) as any).default}));
      } else {
        console.log('The url : ' + request.url);
        console.log('The body : ' + request.body);
      }
    }
    console.log('Loaded from http call :' + request.url);
    return next.handle(request);
  }
}
