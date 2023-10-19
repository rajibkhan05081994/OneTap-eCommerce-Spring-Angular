export class Booking {

  service?: any;
  serviceid?: any;
  servicename?: any;
  servicecategory?: any;
  serviceprice?: any;
  servicediscount?: any;
  serviceimg?: any;

  labour?: any;
  laboourrate?: any;
  totalprice?: any;

  appdate?: any;
  name?: any;
  email?: any;
  address?: any;
  area?: any;
  city?: any;
  postcode?: any;

  constructor(
    service: any,
    serviceid: any,
    servicename: any,
    servicecategory: any,
    serviceprice: any,
    servicediscount: any,
    serviceimg: any,
    labour: any,
    laboourrate: any,
    totalprice: any,
    appdate: any,
    name: any,
    email: any,
    address: any,
    area: any,
    city: any,
    postcode: any
  ) {
    this.service = service;
    this.serviceid = serviceid;
    this.servicename = servicename;
    this.servicecategory = servicecategory;
    this.serviceprice = serviceprice;
    this.servicediscount = servicediscount;
    this.serviceimg = serviceimg;
    this.labour = labour;
    this.laboourrate = laboourrate;
    this.totalprice = totalprice;
    this.appdate = appdate;
    this.name = name;
    this.email = email;
    this.address = address;
    this.area = area;
    this.city = city;
    this.postcode = postcode;
  }


}
