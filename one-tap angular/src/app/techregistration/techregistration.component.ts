import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Techs } from '../techs';
@Component({
  selector: 'app-techregistration',
  templateUrl: './techregistration.component.html',
  styleUrls: ['./techregistration.component.css']
})
export class TechregistrationComponent {
  name: any;
  email: any;
  contact: any;
  password: any;
  id:any;
  img:any;
  degree:any;
  category:any;
  techs: any;
  status:any;
  t:boolean=true;
  constructor(private stservice: ServiceService,private router:Router,private route:ActivatedRoute) {

  }
  next(){
    this.t=!this.t;
  }

  addProfile() {
    this.techs = new Techs(this.name,this.email,this.contact,this.password,this.id, this.degree, this.category, this.img,"Pending");
    this.stservice.addProfile(this.techs).subscribe(data=>console.log("success",data),)
    alert("Your request has been submitted successfully.")
    this.router.navigate(['techregistration']);
  }
}
