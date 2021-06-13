import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';

import { LoginComponent } from './components/login/login.component';

const ROUTES: Routes = [
  { path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
