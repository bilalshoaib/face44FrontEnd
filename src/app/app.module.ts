import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import {UserServicesService} from  './services/user-services.service';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    ListUsersComponent,
    MenuComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    RouterModule.forRoot([
      {
        path: 'ListUserComponent',
        component: ListUsersComponent
      },
      {
        path: 'CreateUser',
        component: CreateUserComponent
      },
      {
        path: 'updateUser/:id',
        component: CreateUserComponent
      }
    ])

  ],
  providers: [
    UserServicesService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
