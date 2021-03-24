import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem("token");
    let newRequest : HttpRequest<any>;    //islemi yakalamaya calisiyoruz. tip tanimlama iki nota üst üste isareti ile
        // kullanicinin yaptigi islemini klonlariz
    newRequest = request.clone({
      headers: request.headers.set("Authorization","Bearer " + token)//  yakaldigi bilgiyi yerlestirme sekli dikaat bearer sonrasi bosluk var
    })
    return next.handle(newRequest);
  }
}

//Error

