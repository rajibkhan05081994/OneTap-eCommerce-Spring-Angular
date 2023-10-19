import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart_id: any;
  customer_id: any;
  product_id: any;
  product_name: any;
  product_brand: any;
  product_price: any;
  Product_quantity: any;
  Product_discount: any;
  total_product_price: any;
  
  //to set logged username  
  //logname :any;

  constructor(private stservice: ServiceService, private router: Router,private route:ActivatedRoute) {
    // if(localStorage.getItem('email')!=null){
    //   this.router.navigate(['cart'])
    //   this.logname = localStorage.getItem('email');
    // }
    
  }

}
