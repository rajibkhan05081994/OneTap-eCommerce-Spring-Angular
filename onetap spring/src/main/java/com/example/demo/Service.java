package com.example.demo;

public class Service {
int serviceid;
String servicename;
String servicecategory;
int serviceprice;
int servicediscount;
String serviceimg;

public Service() {
	super();
	// TODO Auto-generated constructor stub
}
public Service(int serviceid, String servicename, String servicecategory, int serviceprice, int servicediscount, String serviceimg) {
	super();
	this.serviceid = serviceid;
	this.servicename = servicename;
	this.servicecategory = servicecategory;
	this.serviceprice = serviceprice;
	this.servicediscount = servicediscount;
	this.serviceimg = serviceimg;
}
public int getServiceid() {
	return serviceid;
}
public void setServiceid(int serviceid) {
	this.serviceid = serviceid;
}
public String getServicename() {
	return servicename;
}
public void setServicename(String servicename) {
	this.servicename = servicename;
}
public String getServicecategory() {
	return servicecategory;
}
public void setServicecategory(String servicecategory) {
	this.servicecategory = servicecategory;
}
public int getServiceprice() {
	return serviceprice;
}
public void setServiceprice(int serviceprice) {
	this.serviceprice = serviceprice;
}
public int getServicediscount() {
	return servicediscount;
}
public void setServicediscount(int servicediscount) {
	this.servicediscount = servicediscount;
}
public String getServiceimg() {
	return serviceimg;
}
public void setServiceimg(String serviceimg) {
	this.serviceimg = serviceimg;
}


}
