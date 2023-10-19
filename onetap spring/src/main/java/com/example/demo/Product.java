package com.example.demo;

public class Product {
String img;
int id;
String name;
String brand;
String price;
public Product() {
	super();
	// TODO Auto-generated constructor stub
}
public Product(String img, int id, String name, String brand,String price) {
	super();
	this.img = img;
	this.id = id;
	this.name = name;
	this.brand = brand;
	this.price=price;
}
public String getImg() {
	return img;
}
public void setImg(String img) {
	this.img = img;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getBrand() {
	return brand;
}
public void setBrand(String brand) {
	this.brand = brand;
}
public String getPrice() {
	return price;
}
public void setPrice(String price) {
	this.price = price;
}

}
