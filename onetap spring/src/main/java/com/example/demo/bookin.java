package com.example.demo;

public class bookin {
	int appid;
	String appdate;
	String servicecategory;
	String servicename;
	String serviceprice;
	String laboourrate;
	String servicediscount;
	String totalprice;
	String name;
	String email;
	String address;
	String area;
	String city;
	String postcode;

	public bookin() {
		super();
		// TODO Auto-generated constructor stub
	}

	public bookin(int appid, String appdate, String servicecategory, String servicename, String serviceprice,
			String laboourrate, String servicediscount, String totalprice, String name, String email, String address,
			String area, String city, String postcode) {
		super();
		this.appid = appid;
		this.appdate = appdate;
		this.servicecategory = servicecategory;
		this.servicename = servicename;
		this.serviceprice = serviceprice;
		this.laboourrate = laboourrate;
		this.servicediscount = servicediscount;
		this.totalprice = totalprice;
		this.name = name;
		this.email = email;
		this.address = address;
		this.area = area;
		this.city = city;
		this.postcode = postcode;
	}

	public int getAppid() {
		return appid;
	}

	public void setAppid(int appid) {
		this.appid = appid;
	}

	public String getAppdate() {
		return appdate;
	}

	public void setAppdate(String appdate) {
		this.appdate = appdate;
	}

	public String getServicecategory() {
		return servicecategory;
	}

	public void setServicecategory(String servicecategory) {
		this.servicecategory = servicecategory;
	}

	public String getServicename() {
		return servicename;
	}

	public void setServicename(String servicename) {
		this.servicename = servicename;
	}

	public String getServiceprice() {
		return serviceprice;
	}

	public void setServiceprice(String serviceprice) {
		this.serviceprice = serviceprice;
	}

	public String getLaboourrate() {
		return laboourrate;
	}

	public void setLaboourrate(String laboourrate) {
		this.laboourrate = laboourrate;
	}

	public String getServicediscount() {
		return servicediscount;
	}

	public void setServicediscount(String servicediscount) {
		this.servicediscount = servicediscount;
	}

	public String getTotalprice() {
		return totalprice;
	}

	public void setTotalprice(String totalprice) {
		this.totalprice = totalprice;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getPostcode() {
		return postcode;
	}

	public void setPostcode(String postcode) {
		this.postcode = postcode;
	}

}
