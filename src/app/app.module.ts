import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './model/customer/customer.component';
import { CustomerTypeComponent } from './model/customer-type/customer-type.component';
import { LoginComponent } from './model/login/login.component';
import { ProductComponent } from './model/product/product.component';
import { UserComponent } from './model/user/user.component';
import { UserTypeComponent } from './model/user-type/user-type.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/userType/list/list.component';
import { EditComponent } from './pages/userType/edit/edit.component';
import { DeleteComponent } from './pages/userType/delete/delete.component';
import { AddComponent } from './pages/userType/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerTypeComponent,
    LoginComponent,
    ProductComponent,
    UserComponent,
    UserTypeComponent,
    HomeComponent,
    ListComponent,
    EditComponent,
    DeleteComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
