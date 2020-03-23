import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostComponentComponent } from './post-component/post-component.component';
import { JsonServiceService } from './json-service.service';
import { LoggerService } from './logger.service';


@NgModule({
  declarations: [
    AppComponent,
    PostComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    JsonServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggerService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
