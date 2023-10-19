import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { Techs } from '../techs';

@Component({
  selector: 'app-tech-login',
  templateUrl: './tech-login.component.html',
  styleUrls: ['./tech-login.component.css']
})
export class TechLoginComponent {
  email: any;
  password: any;
  constructor(private stservice: ServiceService, private router: Router) {
    if(localStorage.getItem('email')!=null){
      this.router.navigate([''])
    }
  }
  techsLogin() {
    let customer: Techs = new Techs(this.email, this.password)
    this.stservice.customerLoginCheck(customer).subscribe(response => {
      console.log(response);
      if (response != null) {
        localStorage.setItem("email",this.email)
        this.router.navigate(['']);
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
