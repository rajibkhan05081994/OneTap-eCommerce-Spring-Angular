package com.example.demo;

public class Cart {
	int cart_id;
	String customer_id;
	int product_id;
	String product_name;
	String product_brand;
	int prooduct_quantity;
	String product_price;
	String product_discount;
	String total_product_price;
	String product_img;
	public Cart() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getCart_id() {
		return cart_id;
	}
	public void setCart_id(int cart_id) {
		this.cart_id = cart_id;
	}
	public String getCustomer_id() {
		return customer_id;
	}
	public void setCustomer_id(String customer_id) {
		this.customer_id = customer_id;
	}
	public int getProduct_id() {
		return product_id;
	}
	public void setProduct_id(int product_id) {
		this.product_id = product_id;
	}
	public String getProduct_name() {
		return product_name;
	}
	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}
	public String getProduct_brand() {
		return product_brand;
	}
	public void setProduct_brand(String product_brand) {
		this.product_brand = product_brand;
	}
	public int getProoduct_quantity() {
		return prooduct_quantity;
	}
	public void setProoduct_quantity(int prooduct_quantity) {
		this.prooduct_quantity = prooduct_quantity;
	}
	public String getProduct_price() {
		return product_price;
	}
	public void setProduct_price(String product_price) {
		this.product_price = product_price;
	}
	public String getProduct_discount() {
		return product_discount;
	}
	public void setProduct_discount(String product_discount) {
		this.product_discount = product_discount;
	}
	public String getTotal_product_price() {
		return total_product_price;
	}
	public void setTotal_product_price(String total_product_price) {
		this.total_product_price = total_product_price;
	}
	public String getProduct_img(String product_img) {
		return product_img;
	}
	public void setProduct_img(String product_img) {
		this.product_img = product_img;
	}
}
