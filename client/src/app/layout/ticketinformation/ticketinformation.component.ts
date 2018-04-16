import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService, UserService,AuthenticationService } from '../../_services/index';
@Component({
  selector: 'app-ticketinformation',
  templateUrl: './ticketinformation.component.html',
  styleUrls: ['./ticketinformation.component.css']
})
export class TicketinformationComponent implements OnInit {

  route;
  tickett;
  static get parameters() {
		return [ Router];
	}
  constructor(
route,
    private router: Router,
    private auservice: AuthenticationService
   
  ) {
    this.route = route;
    
   }

  ngOnInit() {


    this.route.params.subscribe(params => {
      if(params["_id"]) {
        let ticketid = params["_id"];
        alert(ticketid);
        
        this.auservice.ticinfo(ticketid).subscribe(tickett => {
           console.log(tickett); 
           this.tickett = tickett;
        });
      }
    });



  }

}
