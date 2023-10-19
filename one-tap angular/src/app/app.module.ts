import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TechregistrationComponent } from './techregistration/techregistration.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { TechLoginComponent } from './tech-login/tech-login.component';
import { TechSearchComponent } from './tech-search/tech-search.component';
import { AdminComponent } from './admin/admin.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminproductComponent } from './adminproduct/adminproduct.component';
import { AdminserviceComponent } from './adminservice/adminservice.component';
import { CartComponent } from './cart/cart.component';
import { TechnitiansComponent } from './technitians/technitians.component';
import { AdminTechsComponent } from './admin-techs/admin-techs.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { BookingComponent } from './booking/booking.component';
import { BookComponent } from './book/book.component';
import { AdminappComponent } from './adminapp/adminapp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    ProductsComponent,
    LoginComponent,
    TechregistrationComponent,
    CustomerLoginComponent,
    TechLoginComponent,
    TechSearchComponent,
    AdminComponent,
    AdminPageComponent,
    AdminproductComponent,
    AdminserviceComponent,
    CartComponent,
    TechnitiansComponent,
    AdminTechsComponent,
    ProductdetailsComponent,
    BookingComponent,
    BookComponent,
    AdminappComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
