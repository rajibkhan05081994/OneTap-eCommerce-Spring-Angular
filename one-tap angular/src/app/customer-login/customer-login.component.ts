import { Component } from '@angular/core';
import { Customer } from '../customer';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { CustomerLogin } from '../customer-login';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent {
  email: any;
  password: any;
  constructor(private stservice: ServiceService, private router: Router) {
    if(localStorage.getItem('email')!=null){
      this.router.navigate(['cart'])
    }
  }
  customerLogin() {
    let customer: CustomerLogin = new CustomerLogin(this.email, this.password)
    this.stservice.customerLoginCheck(customer).subscribe(response => {
      console.log(response);
      if (response != null) {
        localStorage.setItem("email",this.email)
        this.router.navigate(['cart']);
      } else {
        alert("Email or Password is not correct");
      }
    })
  }
  logOut(){
    localStorage.removeItem('email')
    this.router.navigate([''])
  }
  
  
}
