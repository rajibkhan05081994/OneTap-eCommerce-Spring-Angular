import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Booking } from '../booking';

@Component({
  selector: 'app-adminapp',
  templateUrl: './adminapp.component.html',
  styleUrls: ['./adminapp.component.css']
})
export class AdminappComponent {
  appointment: any = [];
  servicename?: any;
  servicecategory?: any;
  serviceprice?: any;
  servicediscount?: any;
  laboourrate?: any;
  totalprice?: any;

  appdate?: any;
  name?: any;
  email?: any;
  address?: any;
  area?: any;
  city?: any;
  postcode?: any;
  appid?:any;
  
  constructor(private ser: ServiceService, private router: Router, private route: ActivatedRoute) {
    this.showAppointment();
  }
  data(value: any) {
    this.appid=this.appointment[value].appid
    this.appdate = this.appointment[value].appdate
    this.servicecategory = this.appointment[value].servicecategory
    this.servicename = this.appointment[value].servicename
    this.serviceprice = this.appointment[value].serviceprice
    this.servicediscount = this.appointment[value].servicediscount
    this.totalprice = this.appointment[value].totalprice
    this.name = this.appointment[value].name
    this.email = this.appointment[value].email
    this.address = this.appointment[value].address
    this.area = this.appointment[value].area
    this.city = this.appointment[value].city
    this.postcode = this.appointment[value].postcode
  }
  showAppointment(){
    this.ser.getApp().subscribe(response=>{this.appointment=response});
  }
  deleteApp(i:any){
    // this.products=new Product(id,this.name,this.brand,this.img);
    this.ser.deleteApp(this.appointment[i]).subscribe(data=>{console.log("success",data)
    this.showAppointment();
    alert("Appointment has been deleted successfully.");
  })
    this.router.navigate(['adminapp']);
  }
}
