import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../service';
import { Booking } from '../booking';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  booking: any = [];
  appid?:any;
  service: any;
  serviceid?: any;
  servicename?: any;
  servicecategory?: any;
  serviceprice?: any;
  servicediscount?: any;
  serviceimg?: any;

  labour?: any;
  laboourrate?: any;
  totalprice?: any;


  t: boolean = true;

  appdate?: any;
  name?: any;
  email?: any;
  address?: any;
  area?: any;
  city?: any;
  postcode?: any;

  constructor(private ser: ServiceService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.serviceid = this.route.snapshot.params['id'];
    console.log(this.serviceid);
    this.ser.getServiceById(this.serviceid).subscribe(data => {
      this.service = data;
      this.serviceprice = data.serviceprice;
      this.servicediscount = data.servicediscount;
    })
  }

  logOut() {
    localStorage.removeItem('email')
    this.router.navigate([''])
    alert("logged out successfully")
  }

  labourcacl() {
    this.laboourrate = this.labour * 500;
    if (this.laboourrate <= 0) {
      this.totalprice = this.serviceprice - this.servicediscount;
      console.log(this.totalprice);
      console.log(this.serviceprice + "A");
      console.log(this.servicediscount + "B");

    } else {
      this.totalprice = parseInt((this.serviceprice - this.servicediscount) + this.laboourrate);
      console.log(this.totalprice);
    }
  }

  next() {
    this.t = !this.t;
  }

  data(value: any) {
    this.appdate = this.booking[value].appdate
    this.servicecategory = this.booking[value].servicecategory
    this.servicename = this.booking[value].servicename
    this.serviceprice = this.booking[value].serviceprice
    this.labour = this.booking[value].labour
    this.servicediscount = this.booking[value].servicediscount
    this.totalprice = this.booking[value].totalprice
    this.name = this.booking[value].name
    this.email = this.booking[value].email
    this.address = this.booking[value].address
    this.area = this.booking[value].area
    this.city = this.booking[value].city
    this.postcode = this.booking[value].postcode
  }
  addApp() {
    this.booking = new Booking(
      null,
      null,
      this.service.servicename, 
      this.service.servicecategory,
      this.serviceprice,
      this.servicediscount,
      null,
      null,
      this.laboourrate,
      this.totalprice,
      this.appdate,
      this.name,
      this.email,
      this.address,
      this.area,
      this.city,
      this.postcode
    );

    console.log(this.booking);
    this.ser.addApp(this.booking).subscribe(data => {
      console.log("success", data)

    })
    this.router.navigate(['']);
    alert("Appointment has been booked successfully.");
  }

}
