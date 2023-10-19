import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: any;
  email: any;
  contact: any;
  password: any;
  customer: any;
  logname :any;
  constructor(private stservice: ServiceService,private router:Router,private route:ActivatedRoute) {
    
   
  }
  ngOnInit(): void {
    let mail = this.route.snapshot.params['email'];
    this.stservice.getCustomerByEmail(mail).subscribe(data => {
      this.customer = data;
      this.email = this.customer.email;
      this.name = this.customer.name;
      this.contact = this.customer.contact;
      this.password = this.customer.password;

    });
    this.logname = localStorage.getItem('email');
  }

  addCustomer() {
    this.customer = new Customer(this.name, this.email, this.contact, this.password);
    this.stservice.insertCustomer(this.customer).subscribe(data=>console.log("success",data),)
    alert("Customer has been added successfully.")
    this.router.navigate(['home']);
  }
  
  updateCustomer() {
    this.customer=new Customer(this.email,this.name,this.contact,this.password);
    this.stservice.modifyCustomer(this.customer).subscribe(data=>console.log("success", data),)
    this.router.navigate(['home']);
   }
}
