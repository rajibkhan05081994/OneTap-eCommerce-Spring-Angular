import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Techs } from '../techs';

@Component({
  selector: 'app-admin-techs',
  templateUrl: './admin-techs.component.html',
  styleUrls: ['./admin-techs.component.css']
})
export class AdminTechsComponent {
  name: any;
  email: any;
  contact: any;
  password: any;
  id:any;
  img:any;
  degree:any;
  category:any;
  status:any;
  techs: any;
  constructor(private stservice: ServiceService,private router: Router,private route:ActivatedRoute){
    this.getPendingTechs();
    if(localStorage.getItem('email')!=null){
      this.router.navigate([''])
    }
  }
  getPendingTechs(){
    this.stservice.getPendingTechs().subscribe(response=>{this.techs=response});
  }
  updatePendingTechs(i:any){
    this.stservice.updatePendingTech(this.techs[i]).subscribe(response=>{});
  }
    
}
