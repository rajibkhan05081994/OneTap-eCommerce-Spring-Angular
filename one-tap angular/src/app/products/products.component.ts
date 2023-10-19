import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products:any=[];
  img:any;
id:any;
name:any;
brand:any;
price:any;



customer_id: any;
Product_quantity: any;
Product_discount: any; 
total_product_price: any;
  constructor(private stservice: ServiceService,private router: Router,private route:ActivatedRoute){
    this.showProducts();
    
  
    if(localStorage.getItem('email')!=null){
      this.router.navigate([''])
    }
  }
  showProducts(){
    this.stservice.getProducts().subscribe(response=>{this.products=response});
  }
  logOut(){
    localStorage.removeItem('email')
    this.router.navigate([''])
    alert("logged out successfully")
  }
  addToCart(id:any){
    this.stservice.getProductsById(id).subscribe((data)=>{
      this.products = data;
      this.id = this.products.id;
      this.name=this.products.name;
      this.brand=this.products.brand;
      this.price=this.products.price;
      this.img=this.products.img;
    });
    let cart:Cart=new Cart(null,this.customer_id,this.id,this.name,this.brand,this.price,this.Product_quantity,this.Product_discount,this.total_product_price,this.img);
    this.stservice.addToCart(cart).subscribe(data=>{
  
    });
  }
}
