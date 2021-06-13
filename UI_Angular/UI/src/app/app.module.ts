import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { LoginComponent } from './components/login/login.component';
=======
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { RegisterComponent } from './register';
import { AlertComponent } from './_components';

>>>>>>> register

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent
=======
    RegisterComponent,
    AlertComponent
>>>>>>> register
  ],
  imports: [
    BrowserModule,
    RoutingModule,
<<<<<<< HEAD
    HttpClientModule
=======
    ReactiveFormsModule,
    HttpClientModule,
>>>>>>> register
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }