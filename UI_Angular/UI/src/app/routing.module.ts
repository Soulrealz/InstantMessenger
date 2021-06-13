import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';

const ROUTES: Routes = [
  {path: 'register', component: RegisterComponent}
  // Fill out different application routes here  
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
