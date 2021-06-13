import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { RegisterComponent } from './register';
import { AlertComponent } from './_components';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
