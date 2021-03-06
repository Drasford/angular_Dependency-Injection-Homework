import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent , HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoggerService implements HttpInterceptor{
  constructor() { }
  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    return next.handle(req)
  .pipe(
    tap(event => {
      if(event instanceof HttpResponse){
        console.log("Data intercepted :)");
        console.log(req);
        console.log(next);
      }
  })
  );
}
}
