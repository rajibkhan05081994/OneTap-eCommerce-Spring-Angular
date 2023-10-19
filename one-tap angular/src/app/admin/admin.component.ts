import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { Admin } from '../admin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  email: any;
  password: any;
  constructor(private stservice: ServiceService, private router: Router) {
  
  }
  adminLogin() {
    let admin: Admin = new Admin(this.email, this.password)
    this.stservice.adminLoginCheck(admin).subscribe(response => {
      console.log(response);
      if (response != null) {
        this.router.navigate(['admin-page']);
      } else {
        alert("Email or Password is not correct");
      }
    })

  }
}
