import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../cart';
import { Product } from '../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
products:any=[];
service:any=[];

// img:any;
//id:any;
// name:any;
// brand:any;
// price:any;
logname:any;
 serviceid: any;
// servicename: any;
// servicecategory: any;
// serviceprice:any;
// servicediscount:any;
// serviceimg: any;

// customer_id: any;
// Product_quantity: any;
// Product_discount: any; 
// total_product_price: any;

//appointment form variance//////////






constructor(private stservice: ServiceService,private router: Router,private route:ActivatedRoute){

  this.showServices();

  if(localStorage.getItem('email')!=null){
    this.router.navigate([''])
    this.logname = localStorage.getItem('email');
  }
}

logOut(){
  localStorage.removeItem('email')
  this.router.navigate([''])
  alert("logged out successfully")
}
showServices(){
  this.stservice.getService().subscribe(response=>{this.service=response});
}

bookingProduct(id:any){
  this.router.navigate(['booking-page',id]);
}

}
