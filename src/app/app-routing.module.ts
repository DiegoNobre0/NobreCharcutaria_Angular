import { ListUserTypeComponent } from './pages/userType/list-user-type/list-user-type.component';
import { EditUserTypeComponent } from './pages/userType/edit-user-type/edit-user-type.component';
import { DeleteUserTypeComponent } from './pages/userType/delete-user-type/delete-user-type.component';
import { AddUserTypeComponent } from './pages/userType/add-user-type/add-user-type.component';
import { ListUserComponent } from './pages/user/list-user/list-user.component';
import { EditUserComponent } from './pages/user/edit-user/edit-user.component';
import { DeleteUserComponent } from './pages/user/delete-user/delete-user.component';
import { AddUserComponent } from './pages/user/add-user/add-user.component';
import { ListProductComponent } from './pages/product/list-product/list-product.component';
import { EditProductComponent } from './pages/product/edit-product/edit-product.component';
import { DeleteProductComponent } from './pages/product/delete-product/delete-product.component';
import { AddProductComponent } from './pages/product/add-product/add-product.component';
import { ListCustomerTypeComponent } from './pages/customerType/list-customer-type/list-customer-type.component';
import { EditCustomerTypeComponent } from './pages/customerType/edit-customer-type/edit-customer-type.component';
import { DeleteCustomerTypeComponent } from './pages/customerType/delete-customer-type/delete-customer-type.component';
import { AddCustomerTypeComponent } from './pages/customerType/add-customer-type/add-customer-type.component';
import { ListCustomerComponent } from './pages/customer/list-customer/list-customer.component';
import { EditCustomerComponent } from './pages/customer/edit-customer/edit-customer.component';
import { DeleteCustomerComponent } from './pages/customer/delete-customer/delete-customer.component';
import { AddCustomerComponent } from './pages/customer/add-customer/add-customer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =
[
  { path: '/', component: LoginComponent },
  { path: '/home', component: HomeComponent },
  { path: '/addCliente', component: AddCustomerComponent},
  { path: '/deleteCliente', component: DeleteCustomerComponent},
  { path: '/editCliente', component: EditCustomerComponent},
  { path: '/listCliente', component: ListCustomerComponent},
  { path: '/addClienteType', component: AddCustomerTypeComponent},
  { path: '/deleteClienteType', component: DeleteCustomerTypeComponent},
  { path: '/editClienteType', component: EditCustomerTypeComponent},
  { path: '/listClienteType', component: ListCustomerTypeComponent},
  { path: '/addProduct', component: AddProductComponent},
  { path: '/deleteProduct', component: DeleteProductComponent},
  { path: '/editProduct', component: EditProductComponent},
  { path: '/listProduct', component: ListProductComponent},
  { path: '/addUser', component: AddUserComponent},
  { path: '/deleteUser', component: DeleteUserComponent},
  { path: '/editUser', component: EditUserComponent},
  { path: '/listUser', component: ListUserComponent},
  { path: '/addUserType', component: AddUserTypeComponent},
  { path: '/deleteUserType', component: DeleteUserTypeComponent},
  { path: '/editUserType', component: EditUserTypeComponent},
  { path: '/listUserType', component: ListUserTypeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
