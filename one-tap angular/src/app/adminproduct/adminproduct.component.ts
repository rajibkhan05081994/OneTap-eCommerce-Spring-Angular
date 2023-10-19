import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-adminproduct',
  templateUrl: './adminproduct.component.html',
  styleUrls: ['./adminproduct.component.css']
})
export class AdminproductComponent {
  products:any=[];
  img:any;
  id:any;
  name:any;
  brand:any;
  price:any;
  t:boolean=false;
  f:boolean=false;
  constructor(private stservice: ServiceService,private router: Router,private route:ActivatedRoute){
   this.showProducts();
  }
  nextAdd(){
    this.router.navigate(['adminproduct']);
    this.f=true;
    this.t=false;
  
  }  
  nextUpdate(){
    this.router.navigate(['adminproduct']);
    this.t=true;
    this.f=false;
    
  }
  data(value:any){
    this.img=this.products[value].img
    this.id=this.products[value].id
    this.name=this.products[value].name
    this.brand=this.products[value].brand
    this.price=this.products[value].price
  }
  
  showUpdate(): void {
    
    this.stservice.getProductsById(this.id).subscribe(data => {
      this.img = data.img;
      this.id = data.id;
      this.name = data.name;
      this.brand = data.brand;
      this.price = data.price;
    });
  }
  showProducts(){
    this.stservice.getProducts().subscribe(response=>{this.products=response});
  }
  addProducts(){
    
    this.products =new Product(this.id,this.name,this.brand,this.price,this.img);
    console.log(this.products);
    this.stservice.addProducts(this.products).subscribe(data=>{
      console.log("success",data)
      this.showProducts()
    })
    this.router.navigate(['adminproduct']);
    alert("Product has been added successfully.");
  }
  updateProducts(id:any){
    this.products=new Product(this.id,this.name,this.brand,this.price,this.img);
    this.stservice.updatProducts(this.products).subscribe(data=>{console.log("success",data)
    this.showProducts()
  })
    this.router.navigate(['adminproduct']);
  }
  deleteProducts(i:any){
    // this.products=new Product(id,this.name,this.brand,this.img);
    this.stservice.deleteProducts(this.products[i]).subscribe(data=>{console.log("success",data)
    this.showProducts()
  })
    this.router.navigate(['adminproduct']);
  }
  
}
