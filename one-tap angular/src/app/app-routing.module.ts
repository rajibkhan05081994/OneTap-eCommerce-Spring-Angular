import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { TechregistrationComponent } from './techregistration/techregistration.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { TechSearchComponent } from './tech-search/tech-search.component';
import { AdminComponent } from './admin/admin.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminproductComponent } from './adminproduct/adminproduct.component';
import { AdminserviceComponent } from './adminservice/adminservice.component';
import { CartComponent } from './cart/cart.component';
import { TechnitiansComponent } from './technitians/technitians.component';
import { AdminTechsComponent } from './admin-techs/admin-techs.component';
import { TechLoginComponent } from './tech-login/tech-login.component';
import { BookingComponent } from './booking/booking.component';
import { BookComponent } from './book/book.component';
import { AdminappComponent } from './adminapp/adminapp.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"service",component:ServiceComponent},
  {path:"products",component:ProductsComponent},
  {path:"products",component:ProductsComponent},
  {path:"login/:email",component:LoginComponent},
  {path:"techregistration",component:TechregistrationComponent},
  {path:"customer-login",component:CustomerLoginComponent},
  {path:"tech-search",component:TechSearchComponent},
  {path:"login",component:LoginComponent},
  {path:"admin",component:AdminComponent},
  {path:"admin-page",component:AdminPageComponent},
  {path:"adminproduct",component:AdminproductComponent},
  {path:"adminservice",component:AdminserviceComponent},
  {path:"cart",component:CartComponent},
  {path:"technitians",component:TechnitiansComponent},
  {path:"service/technitians",component:TechnitiansComponent},
  {path:"admin-techs",component:AdminTechsComponent},
  {path:"tech-login",component:TechLoginComponent},
  {path: "booking-page/:id", component:BookingComponent},
  {path:"book",component:BookComponent},
  {path:"adminapp",component:AdminappComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
