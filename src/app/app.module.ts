import { AuthInterceptor } from './authconfig.interceptor';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AddCustomerComponent } from './pages/customer/add-customer/add-customer.component';
import { ListCustomerComponent } from './pages/customer/list-customer/list-customer.component';
import { EditCustomerComponent } from './pages/customer/edit-customer/edit-customer.component';
import { DeleteCustomerComponent } from './pages/customer/delete-customer/delete-customer.component';
import { AddCustomerTypeComponent } from './pages/customerType/add-customer-type/add-customer-type.component';
import { ListCustomerTypeComponent } from './pages/customerType/list-customer-type/list-customer-type.component';
import { EditCustomerTypeComponent } from './pages/customerType/edit-customer-type/edit-customer-type.component';
import { DeleteCustomerTypeComponent } from './pages/customerType/delete-customer-type/delete-customer-type.component';
import { AddProductComponent } from './pages/product/add-product/add-product.component';
import { ListProductComponent } from './pages/product/list-product/list-product.component';
import { EditProductComponent } from './pages/product/edit-product/edit-product.component';
import { DeleteProductComponent } from './pages/product/delete-product/delete-product.component';
import { AddUserComponent } from './pages/user/add-user/add-user.component';
import { ListUserComponent } from './pages/user/list-user/list-user.component';
import { EditUserComponent } from './pages/user/edit-user/edit-user.component';
import { DeleteUserComponent } from './pages/user/delete-user/delete-user.component';
import { AddUserTypeComponent } from './pages/userType/add-user-type/add-user-type.component';
import { ListUserTypeComponent } from './pages/userType/list-user-type/list-user-type.component';
import { EditUserTypeComponent } from './pages/userType/edit-user-type/edit-user-type.component';
import { DeleteUserTypeComponent } from './pages/userType/delete-user-type/delete-user-type.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddCustomerComponent,
    ListCustomerComponent,
    EditCustomerComponent,
    DeleteCustomerComponent,
    AddCustomerTypeComponent,
    ListCustomerTypeComponent,
    EditCustomerTypeComponent,
    DeleteCustomerTypeComponent,
    AddProductComponent,
    ListProductComponent,
    EditProductComponent,
    DeleteProductComponent,
    AddUserComponent,
    ListUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    AddUserTypeComponent,
    ListUserTypeComponent,
    EditUserTypeComponent,
    DeleteUserTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTableModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule,
    HttpClientModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule

  ],
  providers: [
     {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
