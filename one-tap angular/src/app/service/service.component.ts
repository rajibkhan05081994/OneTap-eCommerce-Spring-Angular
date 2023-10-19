import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  service:any=[];
  // serviceid: any;
  // servicename: any;
  // servicecategory: any;
  // serviceprice:any;
  // servicediscount:any;
  // serviceimg: any;
  constructor(private stservice: ServiceService,private router: Router,private route:ActivatedRoute){
    
    this.showServices();
  
    if(localStorage.getItem('email')!=null){
      this.router.navigate([''])
    }
  }
  showServices(){
    this.stservice.getService().subscribe(response=>{this.service=response});
  }
  logOut(){
    localStorage.removeItem('email')
    this.router.navigate([''])
    alert("logged out successfully")
  }
}
