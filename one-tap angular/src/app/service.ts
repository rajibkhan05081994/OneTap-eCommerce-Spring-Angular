export class Service {
   serviceid?: any;
   servicename?: any;
   servicecategory?: any;
   serviceprice?:any;
   servicediscount?:any;
   serviceimg?: any;
    service ?:any;
    labour?: any;
    laboourrate?:any;
    totalprice?:any;

    constructor(serviceid: any, servicename: any, servicecategory: any,serviceprice:any,servicediscount:any, serviceimg: any, service?:any,labour?: any,laboourrate?:any,totalprice?:any) {
        this.serviceid = serviceid;
        this.servicename = servicename;
        this.servicecategory = servicecategory;
        this.serviceprice = serviceprice;
        this.servicediscount=servicediscount;
        this.serviceimg = serviceimg;
        this.service = service;
        this.labour = labour;
        this.laboourrate = laboourrate;
        this.totalprice = serviceprice;
    }
}
