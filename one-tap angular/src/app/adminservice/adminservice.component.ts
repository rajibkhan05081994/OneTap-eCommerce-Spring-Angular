import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../service';

@Component({
  selector: 'app-adminservice',
  templateUrl: './adminservice.component.html',
  styleUrls: ['./adminservice.component.css']
})
export class AdminserviceComponent {
  services:any=[];
  serviceid:any;
  servicename:any;
  servicecategory:any;
  serviceprice:any;
  servicediscount:any;
  serviceimg:any;
  t:boolean=false;
  f:boolean=false;
  constructor(private stservice: ServiceService,private router: Router,private route:ActivatedRoute){
   this.showServices();
  }
  nextAddServices(){
    this.router.navigate(['adminservice']);
    this.f=true;
    this.t=false;
  
  }  
  nextUpdate(){
    this.router.navigate(['adminservice']);
    this.t=true;
    this.f=false;
    
  }
  next(){
    this.router.navigate(['home']);
  }
  dataService(value:any){
    this.serviceid=this.services[value].serviceid
    this.servicename=this.services[value].servicename
    this.servicecategory=this.services[value].servicecategory
    this.serviceprice=this.services[value].serviceprice
    this.servicediscount=this.services[value].servicediscount
    this.serviceimg=this.services[value].serviceimg
  }
  
  showUpdate(): void {
    
    this.stservice.getServiceById(this.serviceid).subscribe(data => {
      this.serviceid = data.serviceid;
      this.servicename = data.servicename;
      this.servicecategory = data.servicecategory;
      this.serviceprice = data.serviceprice;
      this.servicediscount = data.servicediscount;
      this.serviceimg = data.serviceimg;

    });
  }
  showServices(){
    this.stservice.getService().subscribe(response=>{this.services=response});
  }
  addServices(){
    
    this.services =new Service(this.serviceid,this.servicename,this.servicecategory,this.serviceprice,this.servicediscount,this.serviceimg);
    this.stservice.addServices(this.services).subscribe(data=>{
      console.log("success",data)
      this.showServices()
    })
    this.router.navigate(['adminservice']);
    alert("Product has been added successfully.");
  }
  updateServices(id:any){
    this.services=new Service(this.serviceid,this.servicename,this.servicecategory,this.serviceprice,this.servicediscount,this.serviceimg);
    this.stservice.updatServices(this.services).subscribe(data=>{console.log("success",data)
    this.showServices()
    alert("Product has been updated successfully.");
  })
    this.router.navigate(['adminservice']);
  }
  deleteServices(i:any){
    // this.products=new Product(id,this.name,this.brand,this.img);
    this.stservice.deleteServices(this.services[i]).subscribe(data=>{console.log("success",data)
    this.showServices()
    alert("Product has been deleted successfully.");
  })
    this.router.navigate(['adminservice']);
  }
}
