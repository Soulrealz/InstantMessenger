import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


import { RoutingModule } from './routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AlertComponent } from './_components';
import { ChatComponent } from './chat/chat.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        RoutingModule,
        ChatComponent,

    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        AlertComponent
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };