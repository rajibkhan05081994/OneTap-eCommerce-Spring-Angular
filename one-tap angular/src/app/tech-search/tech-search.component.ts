import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tech-search',
  templateUrl: './tech-search.component.html',
  styleUrls: ['./tech-search.component.css']
})
export class TechSearchComponent {
  email: any;
  name: any;
  contact: any;
  password: any;
  customer: any;
  t: boolean = true;
  constructor(private stservice: ServiceService, private router: Router, private route: ActivatedRoute) {

  }

  
  Search(email: any) {
    email=this.email;
    this.router.navigate(['login', email]);

  }

}
