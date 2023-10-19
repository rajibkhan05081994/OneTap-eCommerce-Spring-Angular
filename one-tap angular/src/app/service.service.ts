import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { Techs } from './techs';
import { Observable } from 'rxjs';
import { Admin } from './admin';
import { Product } from './product';
import { Service } from './service';
import { Cart } from './cart';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private url = 'http://localhost:8080/';
  
  
  constructor(private client: HttpClient) { }
  ngOnInit() {
    this.url = 'http://localhost:8080/all';
  }
  getProducts(){
    this.url='http://localhost:8080/all';
    return this.client.get(this.url);
  }
  getService(){
    this.url='http://localhost:8080/allServices';
    return this.client.get(this.url);
  }
  getPendingTechs(){
    this.url='http://localhost:8080/getpendingtechs';
    return this.client.get(this.url);
  }
  getCustomers(){
    this.url='http://localhost:8080/all';
    return this.client.get(this.url);
  }
  getApp(){
    this.url='http://localhost:8080/allbookins';
    return this.client.get(this.url);
  }
  deleteApp(booking:Booking){
    this.url='http://localhost:8080/deleteApp';
    return this.client.post(this.url,booking);
  }
 
  insertCustomer(customer:Customer){
    this.url='http://localhost:8080/save';
    return this.client.post(this.url,customer);
  }
  modifyCustomer(customer:Customer){
    this.url='http://localhost:8080/update';
    return this.client.post(this.url,customer);
  }
  addProfile(techs:Techs){
    this.url='http://localhost:8080/add';
    return this.client.post(this.url,techs);
  }
  customerLoginCheck(customer:Customer):Observable<Customer>{
    this.url='http://localhost:8080/';
    return this.client.post<Customer>(`${this.url}customerLogin`,customer);
  }
  getCustomerByEmail(email:String):Observable<Customer>{
    this.url='http://localhost:8080/';
    return this.client.get<Customer>(`${this.url}customer/${email}`);
  }
  getProductsById(id:any):Observable<Product>{
    this.url='http://localhost:8080/';
    return this.client.get<Product>(`${this.url}product/${id}`);
  }
  getServiceById(id:any):Observable<Service>{
    this.url='http://localhost:8080/';
    return this.client.get<Service>(`${this.url}service/${id}`);
  }
  adminLoginCheck(admin:Admin):Observable<Admin>{
    this.url='http://localhost:8080/';
    return this.client.post<Admin>(`${this.url}adminLogin`,admin);
  }
  addProducts(product:Product){
    this.url='http://localhost:8080/addProduct';
    return this.client.post(this.url,product);
  }
  updatProducts(product:Product){
    this.url='http://localhost:8080/updateProduct';
    return this.client.post(this.url,product);
  }

  updatePendingTech(techs:Techs){
    this.url='http://localhost:8080/updatePendingTechs';
    return this.client.post(this.url,techs);
  }
  deleteProducts(product:Product){
    this.url='http://localhost:8080/deleteProduct';
    return this.client.post(this.url,product);
  }
  addServices(service:Service){
    this.url='http://localhost:8080/addServices';
    return this.client.post(this.url,service);
  }
  updatServices(service:Service){
    this.url='http://localhost:8080/updateServices';
    return this.client.post(this.url,service);
  }
  deleteServices(service:Service){
    this.url='http://localhost:8080/deleteServices';
    return this.client.post(this.url,service);
  }

  addToCart(cart:Cart){
    this.url='http://localhost:8080/addToCart';
    return this.client.post(this.url,cart);
  }

  addApp(booking:Booking){
    this.url='http://localhost:8080/addapp';
    return this.client.post(this.url,booking);
  }

}
