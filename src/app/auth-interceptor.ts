import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service

    if (req.url==environment.url_token)
    {
        return next.handle(req);
    }

      const authToken = localStorage.getItem('token');

      let token =`Bearer  ${authToken}`
      //console.log(`token=>${token}`)
      const authReq = req.clone({
        headers: req.headers.set('Authorization', token)
                            .set('x-hostRef', environment.xhostRef)
      });
  
    // send cloned request with header to the next handler.
    return next.handle(authReq);

  }
}