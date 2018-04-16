import { Component, OnInit } from '@angular/core';
import { AlertService, UserService,AuthenticationService } from '../../_services/index';
import { Router } from '@angular/router';

import { Book } from '../../_models/index';
@Component({
  selector: 'app-ticketclose',
  templateUrl: './ticketclose.component.html',
  styleUrls: ['./ticketclose.component.css']
})
export class TicketcloseComponent implements OnInit {
  tic;
  _id;
  tickett;
  showHide = false;
  showHidee = true;

  changeShowStatus(){
    this.showHide = !this.showHide;
    this.showHidee = !this.showHidee;
    
  }

  book: Book[] = [];
  constructor(
    private router: Router,
    private auservice: AuthenticationService,
    private userService:UserService
  ) { }


  ngOnInit() {
    this.userService.getAllTicketsclose().subscribe(book =>  { 
      console.log(book);
      this.book = book; });
  }
  ticketinfo(_id){
    this.showHide = !this.showHide;
    this.showHidee = !this.showHidee;
   
  this._id = _id;
   
    this.auservice.ticinfo(this._id).subscribe(
      tickett => {
           
            console.log(tickett); 
             this.tickett = tickett; }
        );
        
  
  }

  ticketopen(){
    this.router.navigate(['/ticketinfo']);
     }
     ticketpending(){
       this.router.navigate(['/ticketpending']);
        }
        alltickets(){
          this.router.navigate(['/adminactive']);
        }
        ticketclose(){
          this.router.navigate(['/ticketclose']);
        }

}
